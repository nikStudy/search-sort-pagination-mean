<h1>Search / Sort / Pagination in MEAN stack</h1>
<p>This is a web application employing the searching/sorting/pagination functionalities for the following cases: </p>
<ul>
    <li>Case 1: Pagination done in the backend and paginated results are sent to frontend.</li>
    <li>Case 2: All the results are sent from backend to frontend and pagination is done at the frontend.</li>
    <li>Case 3: Search & sort parameters are applied on single page of results. Data fetched from external API.</li>
    <li>Case 4: Search & sort parameters are applied on all result pages. Data fetched from external API.</li>
</ul>
    
<h1>Front-End</h1>
<ul>
    <li>The code is divided into different components / services for better scalability and readability.</li>
    <li>Components created - AppComponent, BackEndAllUsersComponent, BackEndPaginatedUsersComponent, SearchSortAllDataComponent, PaginationComponent, MainpageComponent, SearchsortComponent, SearchsortsinglepageComponent</li>
    <li>Services created - UserService</li>
    <li>BackEndPaginatedUsersComponent - contains code for case 1</li>
    <li>BackEndAllUsersComponent - contains code for case 2</li>
    <li>SearchsortsinglepageComponent - contains code for case 3</li>
    <li>SearchSortAllDataComponent - contains code for case 4</li>
</ul>

<h1>Back-End</h1>
<ul>
    <li>Models created in MongoDB database - User model</li>
    <li>User model to store the user details</li>
</ul>

<h1>Technologies Used</h1>
<ul>
    <li>Angular</li>
    <li>NodeJS</li>
    <li>ExpressJS</li>
    <li>MongoDB</li>
    <li>Bootstrap</li>
</ul>

<h1>Screenshots</h1>
<img src="./images/Screenshot 2020-08-31 at 1.37.37 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.37.50 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.38.08 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.38.21 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.38.32 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.39.01 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.39.38 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.40.28 AM.png" alt="">
<img src="./images/Screenshot 2020-08-31 at 1.40.40 AM.png" alt="">
