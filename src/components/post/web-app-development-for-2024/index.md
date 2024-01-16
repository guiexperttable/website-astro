---
layout: ../ArticleLayout.astro
---

# Web-App Development for 2024

## Current Landscape

**Current state of Web-App development:** Angular, Vue, React.


In summary, Angular is a comprehensive framework suitable for large-scale applications, Vue emphasizes simplicity and
flexibility, and React offers a declarative approach and high performance for building user interfaces. Each has its
strengths, and the choice depends on the project's requirements and the developer's preferences.

In navigating the landscape of front-end development, the luxury of choice presents both a boon and a challenge. With
options like Angular, Vue, and React at our disposal, the (luxury) problem lies in the abundance of possibilities.

Angular, a robust and feature-rich framework backed by Google, offers a comprehensive solution for large-scale
applications. Its TypeScript foundation and adherence to the MVC architecture bring structure and scalability to
projects. However, the trade-off is a steeper learning curve, demanding developers to invest time in mastering its
intricacies.

Vue.js, designed by Evan You, stands out for its simplicity and flexibility. Positioned as a progressive framework, Vue
is easily integrable into existing projects. Its reactivity system ensures efficient UI updates, and the component-based
structure fosters modularity. The gentle learning curve makes Vue accessible to developers at various skill levels.

React, born out of Facebook's engineering prowess, is a declarative library known for building efficient and interactive
user interfaces. Its component-centric approach and virtual DOM optimization contribute to its popularity. React's
ecosystem, including tools like Redux and React Router, enhances its adaptability to diverse project requirements.

The luxury problem surfaces as developers grapple with choosing the most suitable tool for a given task. Angular, with
its comprehensive feature set, may be optimal for large-scale ventures. Vue, balancing simplicity and flexibility,
caters to projects of varying scales, while React's declarative nature and performance excellence make it a go-to choice
for dynamic web applications.

Ultimately, the (luxury) problem is a blessing of abundance, demanding careful consideration of project needs, team
expertise, and the desired development experience. The decision hinges on finding the right equilibrium between feature
richness, ease of use, and scalability.


**Issues in choosing a web framework:**

- No one-size-fits-all solution; frameworks and requirements evolve.
- Human factor: Programmers have different experiences/preferences, leading to disparate frameworks within a company,
  hindering synergy (lack of shared components, CSS styles).
- Prompt adoption of framework updates is crucial. Neglected projects may face major leaps (e.g., from Angular 14 to
  17).


**Despite challenges, these frameworks excel:**

- Continuous development.
- Large community support.
- Robust documentation.
- Component-oriented: Logic encapsulation, composing small elements into larger ones.
- Predefined paths for common issues like routing, app-wide communication (events), and data exchange.

## Alternative for 2024?

A resolution to this dilemma may lie in leveraging existing standards:

- **Custom elements:** [MDN: Custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements), and [a complete guide to custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)
- **Shadow DOM:** Component encapsulation, ensuring code
  isolation ([MDN: Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)). Custom
  elements + shadow DOM = web component.
- **HTML templates** [MDN: templates](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- **CSS Variables, CSS custom properties:** Defined entities reusable throughout a
  document ([MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties))
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

- **Caution: Not widely adopted yet!** [MDN: CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting), 
  **CSS scope:** @scope CSS at-rule enables precise element selection within specific DOM subtrees without overly
  specific selectors ([MDN: @scope](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope)).

Adopting these standards allows for a **Vanilla Web Stack**, harnessing native browser support.

### Advantages of a Vanilla Web Stack

1. **Stability through Web Standards:**
   Embracing a Vanilla Web Stack leverages the stability inherent in web standards. By relying on foundational technologies like JavaScript, CSS, and HTML, developers can build robust solutions that align with widely accepted practices.

2. **Ease of Learning:**
   A significant advantage lies in the simplicity of learning. Since it revolves around fundamental web development knowledge—JavaScript, CSS, and HTML—it provides a smooth onboarding experience for developers, especially those new to the field.

3. **No Compilation Overhead:**
   Unlike some web frameworks, a Vanilla Web Stack eliminates the need for compiling CSS or JavaScript code (or templates). This streamlines the development process, allowing changes to be implemented directly without an additional compilation step.

### Drawbacks of the Vanilla Web Stack

1. **Lack of TypeScript Support:**
   One notable disadvantage is the absence of native TypeScript support. For projects that benefit from the static typing and enhanced tooling provided by TypeScript, opting for a Vanilla Web Stack might entail foregoing these advantages.

2. **High Degree of Flexibility:**
   The abundance of choices introduces a challenge. Developers need to consider aspects such as file structure, component architecture, routing solutions, the selection of CSS frameworks, and testing methodologies. While flexibility is a strength, it requires thoughtful decision-making, contrasting with the more prescriptive guidance offered by the three major frameworks.

In essence, while a Vanilla Web Stack offers stability, simplicity, and avoids compilation overhead, it may not be the ideal choice for every project, particularly when TypeScript support and a more guided development structure are crucial considerations. The decision often boils down to the project's specific requirements and the development team's preferences for flexibility versus convention.



### TypeScript

When considering TypeScript ([typescriptlang.org](https://www.typescriptlang.org/)), its significance becomes pronounced in the realm of larger applications with intricate business models. TypeScript, a superset of JavaScript, proves invaluable in navigating challenges inherent in substantial projects.

The primary advantage emerges in scenarios where multiple developers collaborate, ensuring code coherence through static typing. This addresses potential pitfalls and enhances collaboration efficiency, making the development process smoother and more error-resistant.

Moreover, TypeScript excels in handling refactoring, a crucial aspect of evolving software projects. With its static analysis capabilities, TypeScript aids developers in restructuring codebases without sacrificing stability, reducing the risk of introducing bugs during these transformations.

In the context of extensions, TypeScript's strong typing proves advantageous. As larger applications evolve, the need for seamless integrations and extensions arises. TypeScript provides a safety net, catching potential issues during the development phase and mitigating the risks associated with extending complex business models.

In essence, TypeScript, with its focus on static typing and advanced tooling, emerges as a valuable asset for larger applications, offering a robust solution to challenges related to team collaboration, refactoring, and the dynamic evolution of complex business models.


## Solution to this Dilemma? Lit or Stencil

In navigating the challenges posed by the evolving landscape of web development, a compelling solution arises in the form of lightweight helpers. This entails exploring tools that circumvent the constraints of the dated web components API, providing a fresh perspective on component-based architecture.

Two noteworthy contenders in this domain are [**Lit**](https://lit.dev/) and [**Stencil**](https://stenciljs.com/). Unlike conventional frameworks, Lit and Stencil position themselves as lightweight companions, empowering developers to construct framework-independent components.

**Lit:**
- *Description:* Lit stands out as a simple yet powerful library for creating swift and lightweight web components.
- *GitHub:* [github.com/lit/lit](https://github.com/lit/lit)
- *Twitter:* [twitter.com/buildWithLit](https://twitter.com/buildWithLit)
- *Slack:* [lit.dev/slack-invite](https://lit.dev/slack-invite/)
- *YouTube:* [Link](https://www.youtube.com/channel/UCok4ZKSzM3jY7JQRMlF-DPg)
- *Project Website:* [lit.dev](https://lit.dev/)

**Stencil:**
- *Description:* Stencil emerges as a compiler generating web components, specifically custom elements. It amalgamates the best concepts from popular frameworks into a user-friendly build-time tool. (Fun fact: Stencil was initially developed for the Ionic Framework)
- *GitHub:* [github.com/ionic-team/stencil](https://github.com/ionic-team/stencil)
- *Twitter:* [twitter.com/stenciljs](https://twitter.com/stenciljs)
- *Slack:* [stencil-worldwide.herokuapp.com](https://stencil-worldwide.herokuapp.com/)
- *YouTube:* [youtube.com/c/Ionicframework](https://www.youtube.com/c/Ionicframework/)
- *Project Website:* [stenciljs.com](https://stenciljs.com/)

These tools, while not frameworks per se, empower developers to construct components unbound by the limitations of a particular framework. They offer a middle ground, combining the benefits of component-based development with the flexibility to transcend the confines of a singular framework.


**Comparisons:**
- [TypeScript and Web Components Frameworks: Lit vs. Stencil](https://medium.com/@alexandragrosu03/typescript-and-web-components-frameworks-lit-vs-stencil-75bd22d33a4d)
- [npm trends lit-html vs @stencil/core](https://npmtrends.com/@stencil/core-vs-lit-html)


| Tool         | Weekly Downloads | Source                                                                         |
|--------------|------------------|--------------------------------------------------------------------------------|
| Lit HTML     | 1,950,663        | [npmjs.com/package/lit-html](https://www.npmjs.com/package/lit-html)           |
| Stencil Core | 589,590          | [npmjs.com/package/@stencil/core](https://www.npmjs.com/package/@stencil/core) |



## Managing Numerous Components: Monorepos

Effectively handling a myriad of components in a development project often leads to the adoption of Monorepositories, commonly known as Monorepos. This approach involves keeping all related code, libraries, and tools within a single repository, providing a unified and organized structure.

A prominent tool facilitating Monorepo management is [**NX**](https://nx.dev/). NX, an open-source toolkit, empowers developers to efficiently build, test, and scale projects within a Monorepo environment. It supports various frameworks and languages, enabling seamless collaboration and code sharing across diverse components.

While NX stands out as a robust choice, an alternative worth considering is [**Lerna**](https://lerna.js.org/). Lerna is a popular Monorepo management tool that optimizes the workflow for JavaScript and TypeScript projects. It streamlines versioning, publishing, and dependency management across multiple packages within a Monorepo. Lerna's simplicity and flexibility make it a compelling alternative for those seeking a dedicated solution tailored to the specific needs of their Monorepo projects.

In conclusion, the adoption of Monorepos, facilitated by tools like NX and Lerna, enhances the development experience by providing a cohesive structure for managing numerous components. The choice between NX and Lerna depends on project requirements and developer preferences.


## Conclusion
As we approach the conclusion of this discourse, it becomes evident that 2024 marks a strategic juncture for reevaluating your technology stack. Embracing the advancements, tools, and frameworks that align with current needs and industry trends is pivotal for staying competitive and fostering innovation. In this dynamic landscape, thoughtful consideration of your technology choices in 2024 can pave the way for enhanced efficiency, scalability, and overall success in your development endeavors.

**We'll be testing this approach soon and sharing our insights in a follow-up article. Stay tuned and follow me on [gui.expert/posts](https://gui.expert/posts) for the latest updates.**

****

My other articles:

- [enhancing-data-table-ui](https://gui.expert/post/enhancing-data-table-ui/)
- [top-framework-agnostic-data-table-libraries-in-2024](https://gui.expert/post/top-framework-agnostic-data-table-libraries-in-2024/)