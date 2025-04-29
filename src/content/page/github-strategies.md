---
title: Tech by Design Hub
description: GitHub Repository Branching and Commit Strategies
pubDate: 2025-05-24T00:00:00.000Z
coverSVG: ../../assets/tech-by-design/techbd-hub.svg
socialImage: ../../assets/tech-by-design/techbd-hub.png
---


# Tech by Design GitHub Repository Branching and Commit Strategies

## Branch Naming Strategy

### General Principles

1.  **Use a Consistent Naming Convention**
    -   Branches should be descriptive, concise, and follow a clear pattern
    -   Include the type of work and a brief description of the change

### Branch Type Prefixes

-   `feat/`: For new features or enhancements
    -   Example: `feat/user-authentication`
   
-   `bug/`: For fixing bugs
    -   Example: `bug/login-error-handling`
   
-   `hotfix/`: For critical fixes in production
    -   Example: `hotfix/security-vulnerability`
    
-   `refactor/`: Used when improving code structure without changing functionality
    -   Example: `refactor/database-query-optimization`

-   `docs/`: For documentation changes
    -   Example: `docs/update-readme`
    
-   `test/`: For adding or modifying tests
    -   Example: `test/add-user-validation-tests`
    
-   `chore/`: For adding or modifying project/repo/etc settings or configs, including CI/CD
    -   Example: `chore/update-deploy-action`

### Branch Naming Rules

-   Use lowercase letters
-   Replace spaces with hyphens
-   Keep names short and meaningful
-   Include relevant issue or ticket numbers 
-   Avoid generic names like `temp` or `fix`

### Example Branch Names
The branch naming should follow this syntax:
`{type}/{issue-number}/{short-description}`

Assuming you're working a ticket numbered 1234
feat/1234/add-dark-mode
bug/1234/resolve-memory-leak
hotfix/1234/payment-gateway-error
refactor/1234/simplify-authentication-flow
docs/1234/update-installation-guide
test/1234/improve-user-service-coverage

All branches must include a issue number that is being worked on. If you do not have an issue number for the work you're doing, your pull request will be declined. It is a _must_ that you create an issue on the Engineering board before committing a branch or making a Pull Request.


## Commit Message Strategy

### Commit Message Structure

Adopt the conventional commits format:

### Commit Types

-   `feat`: A new feature
-   `fix`: A bug fix
-   `docs`: Documentation changes
-   `style`: Code formatting, missing semicolons, etc.
-   `refactor`: Code refactoring without changing functionality
-   `test`: Adding or modifying tests
-   `chore`: Maintenance tasks, updates to build processes, including CI/CD tasks
-   `perf`: Performance improvements

### Commit Message Best Practices

1.  **Be Concise and Descriptive**
    -   Limit the first line to 50 characters
    -   Use imperative mood: "Add feature" not "Added feature"
    -   Explain _what_ and _why_, not _how_
2.  **Provide Context**
    - Include the scope of your work in the description, where applicable  
    - Include additional details in the body if necessary
    -   Reference issue numbers when applicable

### Example Commit Messages
Good commit messages
feat: Add user authentication module
fix: Resolve login page memory leak
docs: Update README with new installation steps
refactor: Optimize query performance
test: Add unit tests for user service
chore: Update dependencies to latest versions

Bad commit messages
"fixed stuff"
"changes"
"update"

## Workflow Recommendations

1.  Create feature branches from `main` 
2.  Keep branches focused and small
3.  Use pull requests for code review
4.  Squash commits before merging to keep history clean
5.  Delete branches after merging