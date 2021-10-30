function initListeners() {
    //Load new page content when anchor tags are clicked
    $(window).on("hashchange", MODEL.changeRoute);
    MODEL.changeRoute();
    //Toggle "active" class to open/close the nav menu when the icon is clicked
    $(".navBars").click(function(e){
        $(".navBars").toggleClass("active");
        $(".navLinks").toggleClass("active");
    });

    //Toggle "active" class to close the nav menu when a link is clicked
    $(".navLinks a").click(function(e){
        $(".navBars").toggleClass("active");
        $(".navLinks").toggleClass("active");
    });

    //Toggle show/hide menu links when logged in/out
    $(".btnLogin a").click(function(e){
        $("#createrecipe").toggleClass("hidden");
        $("#loginBtn").toggleClass("hidden");
        $("#logoutBtn").toggleClass("hidden");
        $("#yourrecipes").toggleClass("hidden");
        $(".foot__loginOnly").toggleClass("hidden");
    })

}

function bodyListeners() {
    //Add click listener for View/Edit/Delete Recipe buttons and display
    //the button name in an alert
    $(".recipeBtn").click(function(e){
        //console.log(this.innerHTML);
    });

    //Add click listener for Submit Recipe form button
    //Displays the values entered in the Create/Edit form in the console
    $("#submitRecipe").click(function(e){
        e.preventDefault();
        let rcpImg = $("#rcpImg").val();
        let rcpName = $("#rcpName").val();
        let rcpDsc = $("#rcpDsc").val();
        let rcpTime = $("#rcpTime").val();
        let rcpSrv = $("#rcpSrv").val();
        let ingr1 = $("#ingr1").val();
        let ingr2 = $("#ingr2").val();
        let ingr3 = $("#ingr3").val();
        let instr1 = $("#instr1").val();
        let instr2 = $("#instr2").val();
        let instr3 = $("#instr3").val();
        console.log("Image: " + rcpImg + " " + "Name: " + rcpName + " " + 
        "Description: " + rcpDsc + " " + "Time: " + rcpTime + " " + "Servings: " + 
        rcpSrv + " " + "Ingredients: " + ingr1 + ", " + ingr2 + ", " + 
        ingr3 + " " + "Instructions: " + instr1 + ", " + instr2 + ", " + 
        instr3);
    })

    //Fills the Edit form with the recipe data to be edited
    $("#loadEditData").click(function(e){
        e.preventDefault();
        let recipeObj = {
            rcpImg: "../images/browse/recipe-pizza.jpg",
            rcpName: "Supreme Pizza",
            rcpDsc: "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
            rcpTime: "1h 24min",
            rcpSrv: "4 servings",
            ingr1: "Pizza Crust",
            ingr2: "Pizza Sauce",
            ingr3: "Cheese",
            instr1: "Put the sauce on the crust",
            instr2: "Put the cheese on the sauce",
            instr3: "Put the pizza in the oven"
        }
       $("#rcpImg").val(recipeObj.rcpImg);
       $("#rcpName").val(recipeObj.rcpName);
       $("#rcpDsc").val(recipeObj.rcpDsc);
       $("#rcpTime").val(recipeObj.rcpTime);
       $("#rcpSrv").val(recipeObj.rcpSrv);
       $("#ingr1").val(recipeObj.ingr1);
       $("#ingr2").val(recipeObj.ingr2); 
       $("#ingr3").val(recipeObj.ingr3); 
       $("#instr1").val(recipeObj.instr1);
       $("#instr2").val(recipeObj.instr2);
       $("#instr3").val(recipeObj.instr3); 
    })
    
    //Display the values entered in the login form in the console
    //when the login button is clicked
    $("#loginSubmit").click(function(e){
        e.preventDefault();
        let loginEmail = $("#loginEmail").val();
        let loginPass = $("#loginPass").val();
        console.log("Email: " + loginEmail + ", Password: " + loginPass);
    })
    //Display the values entered in the signup form in the console
    //when the signup button is clicked
    $("#signUpSubmit").click(function(e){
        e.preventDefault();
        let signUpFName = $("#signUpFName").val();
        let signUpLName = $("#signUpLName").val();
        let signUpEmail = $("#signUpEmail").val();
        let signUpPass = $("#signUpPass").val();
        console.log("First Name: " + signUpFName + ", Last Name: " + signUpLName + ", Email: " + signUpEmail + ", Password: " + signUpPass);
    })
}

$(document).ready(function() {
    initListeners();
});