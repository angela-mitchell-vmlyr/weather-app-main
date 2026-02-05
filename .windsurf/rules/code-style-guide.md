---
trigger: always_on
---

# HTML Guidelines
- Use semantic HTML elements
- Use aria labels and roles only if an element requires and supports it to communicate its purpose for accessibility
- Use header, footer, and main elements to define the structure of the page

# CSS Guidelines
- Use the BEM naming convention for classes (e.g. .block__element--modifier)
- Keep main BEM selectors on first level to avoid nesting and high specificity
- Use 3-tier token model for variables and put each tier collection in its own file(e.g. $blue-500, var(--primary-color-500), var(--background-primary))
- Use relative units (esp.for dimensions and spacing) (e.g. rem, em, %) and avoid absolute units (e.g. px)

# JavaScript Framework Guidlines
- Create atomic components using the atomic design pattern (atoms, molecules, organisms, templates, and pages) for reusability
- Each component should have their own directory with a stylesheet, script/template, and test file
- Use the naming convention that follows established best practices and standards of the JavaScript framework being used
- Import and render components in the main application's template file (ex. index.html, main.tsx)

# JavaScript and TypeScript Guidelines
- Use ES6+ features for modern JavaScript
