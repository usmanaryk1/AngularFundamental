# # Define an array of commit messages (100 unique messages)
# $commit_messages = @(
#     "Learned about Angular Components",
#     "Implemented Angular Services",
#     "Explored Angular Directives",
#     "Worked with Angular Forms",
#     "Integrated Angular HTTPClient",
#     "Used Angular Routing",
#     "Tested Angular Applications",
#     "Deployed Angular App",
#     "Angular Performance Optimization",
#     "Used Angular Animations",
#     "Explored Angular Material",
#     "Angular Security Best Practices",
#     "Set up Angular CLI",
#     "Created Angular Modules",
#     "Used Angular Pipes",
#     "Handled Angular Events",
#     "Worked on Angular State Management",
#     "Integrated Angular with REST API",
#     "Optimized Angular Build",
#     "Angular Dependency Injection",
#     "Explored Angular Ivy",
#     "Angular Change Detection",
#     "Lazy Loading in Angular",
#     "Angular Internationalization",
#     "Angular Unit Testing",
#     "Debugging Angular Applications",
#     "Created Angular Custom Directives",
#     "Responsive Design in Angular",
#     "Angular Accessibility",
#     "Angular Performance Profiling",
#     "Worked with Angular Templates",
#     "Angular Lifecycle Hooks",
#     "Created Angular Guards",
#     "Angular Forms Validation",
#     "Angular Reactive Forms",
#     "Explored Angular View Encapsulation",
#     "Angular Change Detection Strategies",
#     "Angular Template Reference Variables",
#     "Angular Service Workers",
#     "Angular PWA Setup",
#     "Angular Universal for SSR",
#     "Angular HMR (Hot Module Replacement)",
#     "Used Angular Libraries",
#     "Configured Angular Environment Variables",
#     "Explored Angular Schematics",
#     "Angular Monorepo with Nx",
#     "Used Angular CDK",
#     "Angular Accessibility Features",
#     "Explored Angular Elements",
#     "Angular Dynamic Components",
#     "Handled Angular Errors",
#     "Angular Custom Pipes",
#     "Angular Template-Driven Forms",
#     "Used Angular Flex Layout",
#     "Explored Angular Animations API",
#     "Angular Dependency Injection Hierarchy",
#     "Optimized Angular Lazy Loading",
#     "Configured Angular CLI Workspaces",
#     "Angular Workspace Schematics",
#     "Explored Angular DevTools",
#     "Angular Forms API",
#     "Angular Template Syntax",
#     "Created Angular Attribute Directives",
#     "Angular Structural Directives",
#     "Angular Custom Validators",
#     "Explored Angular Decorators",
#     "Configured Angular Routing Guards",
#     "Used Angular HTTP Interceptors",
#     "Explored Angular Template Outlets",
#     "Angular Event Binding",
#     "Angular Property Binding",
#     "Angular Two-Way Data Binding",
#     "Angular Content Projection",
#     "Angular NgModules",
#     "Used Angular CLI Builders",
#     "Explored Angular Compiler Options",
#     "Angular Platform Modules",
#     "Created Angular Custom Elements",
#     "Configured Angular Linting",
#     "Angular ESLint Configuration",
#     "Angular TSLint Migration",
#     "Explored Angular Workspace Generators",
#     "Used Angular Storybook",
#     "Angular Component Communication",
#     "Angular Parent-Child Communication",
#     "Angular ViewChild Decorator",
#     "Angular ContentChild Decorator",
#     "Angular Component Lifecycle",
#     "Angular Dependency Injection Tokens",
#     "Angular InjectionToken",
#     "Angular HttpClient Testing",
#     "Angular Protractor E2E Testing",
#     "Angular Jasmine Unit Testing",
#     "Explored Angular TestBed",
#     "Used Angular Mock Services",
#     "Angular Component Factory Resolver",
#     "Angular Renderer2 Service",
#     "Angular Platform Detection",
#     "Explored Angular CDK Drag and Drop",
#     "Angular CDK Overlay",
#     "Angular CDK Portal"
# )

# # Start date
# $start_date = [datetime]::ParseExact("2021-11-09", "yyyy-MM-dd", $null)
# # End date
# $end_date = [datetime]::ParseExact("2022-02-16", "yyyy-MM-dd", $null)

# # Function to increment date
# function Increment-Date($date) {
#     $date.AddDays(1)
# }

# # Current date variable
# $current_date = $start_date

# # Counter for commit messages
# $message_index = 0

# # Loop through dates and create commits
# while ($current_date -le $end_date) {
#     $date_with_time = $current_date.ToString("yyyy-MM-ddTHH:mm:ss")
#     $message = $commit_messages[$message_index % $commit_messages.Count]
    
#     # Set the date for the commit
#     $env:GIT_AUTHOR_DATE = $date_with_time
#     $env:GIT_COMMITTER_DATE = $date_with_time

#     # Create a new file or make changes to an existing file
#     $file_name = "$($message.Replace(' ', '-')).txt"
#     "$message" | Out-File -FilePath $file_name

#     # Stage the changes
#     git add $file_name

#     # Commit the changes with the backdated timestamp
#     git commit -m "$message"

#     # Push the commit immediately
#     git push origin master

#     # Increment the date
#     $current_date = Increment-Date $current_date

#     # Increment the message index
#     $message_index++
# }

# # Unset the environment variables
# Remove-Item Env:GIT_AUTHOR_DATE
# Remove-Item Env:GIT_COMMITTER_DATE




# Define an array of commit messages (45 unique messages)
$commit_messages = @(
    "Learned about Angular Components",
    "Implemented Angular Services",
    "Integrated Angular HTTPClient",
    "Explored Angular Directives",
    "Worked with Angular Forms",
    "Used Angular Routing",
    "Angular Performance Optimization",
    "Tested Angular Applications",
    "Deployed Angular App",
    "Used Angular Animations",
    "Set up Angular CLI",
    "Explored Angular Material",
    "Angular Security Best Practices",
    "Created Angular Modules",
    "Worked on Angular State Management",
    "Used Angular Pipes",
    "Handled Angular Events",
    "Integrated Angular with REST API",
    "Explored Angular Ivy",
    "Optimized Angular Build",
    "Angular Dependency Injection",
    "Angular Change Detection",
    "Angular Unit Testing",
    "Lazy Loading in Angular",
    "Angular Internationalization",
    "Debugging Angular Applications",
    "Angular Lifecycle Hooks",
    "Created Angular Custom Directives",
    "Responsive Design in Angular",
    "Angular Accessibility",
    "Angular Performance Profiling",
    "Worked with Angular Templates",
    "Created Angular Guards",
    "Angular Template Reference Variables",
    "Angular Service Workers",
    "Angular Reactive Forms",
    "Explored Angular View Encapsulation",
    "Angular PWA Setup",
    "Angular Change Detection Strategies",
    "Angular Universal for SSR",
    "Used Angular CDK",
    "Angular HMR (Hot Module Replacement)",
    "Configured Angular Environment Variables",
    "Used Angular Libraries",
    "Angular Monorepo with Nx",
    "Explored Angular Schematics",
    "Angular Forms Validation"
)

# Start date
$start_date = [datetime]::ParseExact("2021-11-09", "yyyy-MM-dd", $null)
# End date
$end_date = [datetime]::ParseExact("2022-02-16", "yyyy-MM-dd", $null)

# Function to generate a random date between start and end date
function Get-RandomDate($startDate, $endDate) {
    $range = ($endDate - $startDate).Days
    return $startDate.AddDays((Get-Random -Maximum $range))
}

# Generate 45 unique random dates
$random_dates = @()
while ($random_dates.Count -lt 45) {
    $random_date = Get-RandomDate $start_date $end_date
    if (-not $random_dates.Contains($random_date)) {
        $random_dates += $random_date
    }
}

# Sort the random dates
$random_dates = $random_dates | Sort-Object

# Loop through random dates and create commits
for ($i = 0; $i -lt $random_dates.Count; $i++) {
    $current_date = $random_dates[$i]
    $date_with_time = $current_date.ToString("yyyy-MM-ddTHH:mm:ss")
    $message = $commit_messages[$i % $commit_messages.Count]
    
    # Set the date for the commit
    $env:GIT_AUTHOR_DATE = $date_with_time
    $env:GIT_COMMITTER_DATE = $date_with_time

    # Create a new file or make changes to an existing file
    $file_name = "$($message.Replace(' ', '-')).txt"
    Add-Content -Path $file_name -Value "$message"

    # Stage the changes
    git add $file_name

    # Commit the changes with the backdated timestamp
    git commit -m "$message"

    # Push the commit immediately
    git push origin master
}

# Unset the environment variables
Remove-Item Env:GIT_AUTHOR_DATE
Remove-Item Env:GIT_COMMITTER_DATE


# for run this script paste this in powershell terminal => powershell -ExecutionPolicy Bypass -File create-backdated-commits.ps1













