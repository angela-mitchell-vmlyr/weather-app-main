// Dropdown controller for Alpine.js integration
// This handles dropdown open/close behavior and accessibility

export function initDropdownControllers() {
  // Add click handlers after DOM is ready
  document.addEventListener('alpine:init', () => {
    // Handle dropdown triggers
    document.addEventListener('click', (e) => {
      const trigger = (e.target as HTMLElement).closest('.dropdown__trigger');
      
      if (trigger) {
        e.preventDefault();
        const dropdown = trigger.closest('.dropdown');
        const menu = dropdown?.querySelector('.dropdown__menu');
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown__trigger[aria-expanded="true"]').forEach(t => {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            const m = t.closest('.dropdown')?.querySelector('.dropdown__menu');
            if (m) m.setAttribute('aria-hidden', 'true');
          }
        });
        
        // Toggle current dropdown
        if (dropdown && menu) {
          trigger.setAttribute('aria-expanded', (!isExpanded).toString());
          menu.setAttribute('aria-hidden', isExpanded.toString());
        }
      }
      
      // Close dropdown when clicking outside
      if (!trigger && !(e.target as HTMLElement).closest('.dropdown__menu')) {
        document.querySelectorAll('.dropdown__trigger[aria-expanded="true"]').forEach(t => {
          t.setAttribute('aria-expanded', 'false');
          const m = t.closest('.dropdown')?.querySelector('.dropdown__menu');
          if (m) m.setAttribute('aria-hidden', 'true');
        });
      }
    });
    
    // Handle option selection
    document.addEventListener('click', (e) => {
      const option = (e.target as HTMLElement).closest('.dropdown__option');
      
      if (option) {
        e.preventDefault();
        const dropdown = option.closest('.dropdown');
        const variant = dropdown?.getAttribute('data-variant');
        const value = option.getAttribute('data-value');
        
        if (variant === 'single') {
          // Single select - close dropdown and update selection
          const trigger = dropdown?.querySelector('.dropdown__trigger');
          const menu = dropdown?.querySelector('.dropdown__menu');
          
          if (trigger && menu) {
            trigger.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
          }
          
          // Update selected state
          dropdown?.querySelectorAll('.dropdown__option').forEach(opt => {
            opt.classList.remove('dropdown__option--selected');
            opt.setAttribute('aria-checked', 'false');
          });
          
          option.classList.add('dropdown__option--selected');
          option.setAttribute('aria-checked', 'true');
          
          // Dispatch custom event with selected value
          dropdown?.dispatchEvent(new CustomEvent('dropdown-select', {
            detail: { value },
            bubbles: true
          }));
        } else {
          // Multi select - toggle selection
          const isSelected = option.classList.contains('dropdown__option--selected');
          
          if (isSelected) {
            option.classList.remove('dropdown__option--selected');
            option.setAttribute('aria-checked', 'false');
          } else {
            option.classList.add('dropdown__option--selected');
            option.setAttribute('aria-checked', 'true');
          }
          
          // Dispatch custom event with all selected values
          const selectedValues = Array.from(dropdown?.querySelectorAll('.dropdown__option--selected') || [])
            .map(opt => opt.getAttribute('data-value'))
            .filter(Boolean);
          
          dropdown?.dispatchEvent(new CustomEvent('dropdown-change', {
            detail: { values: selectedValues },
            bubbles: true
          }));
        }
      }
    });
  });
}
