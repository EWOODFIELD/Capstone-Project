//[AppComp 1.0]
    //Name: Appbar.js
    //Purpose: Render Navigation Bar for Application
    //Source: Components
    //Breakdown:
        //[APB 1.0] Defines Website Pages and Navigation Routes
        //[APB 1.10] Defines Profile Dropdown Links and Navigation Routes
        //[APB 1.20] Defines Application Navbar Theme, States, Functionality, and Structure
            //[APB 1.21] UseStates for Navigating/Opening/Closing
            //[APB 1.22] Content to be Displayed on Webpage

//[AppComp 1.01]
    //Name: Context.js
    //Purpose: Provision Global Information Context for Logged in User Details (ID, Password)
    //Source: Components
    //Breakdown:
        //[APB 1.30] Exports Created Context to Other Components
        //[APB 1.40] Create Context (Pass Current User Details to Index.js for use in Other Components)

//[AppComp 1.02]
    //Name: EventIDForm.js
        //Purpose: Provision User Interactable CRUD Submission Form to Update Database Table Records by ID
        //Source: Components
        //Breakdown:
            //[APB 1.50] Define User Event ID CRUD Submission Form Structure 
                //[APB 1.51] Use States for Fields to be Updated by User
                //[APB 1.52] Database Axios Call by ID and Dynamic Card Rendering
                //[APB 1.53] Define Update Fields as Per Database Table
                //[APB 1.54] Put Request to Database to Update User Specified Data Record
                //[APB 1.55] Form and Form Fields to Display on Webpage 

//[AppComp 1.03]
    //Name: EventNameForm.js
        //Purpose: Provision User Interactable CRUD Submission Form to Update Database Table Records by Name
        //Source: Components
        //Breakdown:
            //[APB 1.50] Define User Event Name CRUD Submission Form Structure 
                //[APB 1.61] Use States for Fields to be Updated by User
                //[APB 1.62] Database Axios Call by Name and Dynamic Card Rendering
                //[APB 1.63] Define Update Fields as Per Database Table
                //[APB 1.64] Put Request to Database to Update User Specified Data Record
                //[APB 1.65] Form and Form Fields to Display on Webpage 