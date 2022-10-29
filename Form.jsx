import React from "react";
import Deny from "./Deny.jsx";
import Review from "./Review.jsx";
import Approved from "./Approved.jsx"

function Strike(name_last) {
    if (name_last === "Deny") {
        return (
            <Deny />
        );
    }
    if (name_last === "Review") {
        return (
            <Review />
        );
    }
    else {
        return (
            <Approved />
        );
    }
}

function Form() {
  return (
    <div className="App">
      <form class="form-signin w-100 m-auto" action="/api" method="POST">
      <div>
        <img class="mb-4" src="https://1000logos.net/wp-content/uploads/2017/03/Symbol-Louis-Vuitton.jpg" alt="" width="72" height="57" />
        <h1 class="h3 mb-3 fw-normal">Bank LV</h1>
      </div>
      <div>
        <label for="floatingInput">First Name</label>
        <input type="text" name="name_first" class="form-control"   placeholder="First Name"/>
      </div>
      <div>
        <label for="floatingInput">Last Name</label>
        <input type="text" name="name_last" class="form-control"   placeholder="Last Name"/>
      </div>
      <div>
        <label for="floatingInput">Address Line 1</label>
        <input type="text" name="address_line_1" class="form-control"   placeholder="Address Line 1"/>
      </div>
      <div>
        <label for="floatingInput">Address Line 2</label>
        <input type="text" name="address_line_2" class="form-control"   placeholder="Address Line 2"/>
      </div>
      <div>
        <label for="floatingInput">City</label>
        <input type="text" name="address_city" class="form-control"   placeholder="City"/>
      </div>
      <div>
        <label for="floatingInput">State</label>
        <input type="text" name="address_state" class="form-control"   placeholder="State"/>
      </div>
      <div>
        <label for="floatingInput">Zip/Postal Code</label>
        <input type="text" name="address_postal_code" class="form-control"   placeholder="Zip/Postal Code"/>
      </div>
      <div>
        <label for="floatingInput">Country</label>
        <input type=" text " name="address_country_code" class="form-control"   placeholder="Country"/>
      </div>
      <div>
        <label for="floatingInput">SSN</label>
        <input type="password" name="document_ssn" class="form-control"   placeholder="SSN"/>
      </div>
      <div>
        <label for="floatingInput">Email</label>
        <input type="email" name="email_address" class="form-control" placeholder="Email"/>
      </div>
      <div>
        <label for="floatingInput">Date of Birth</label>
        <input type="text" name="birth_date" class="form-control" placeholder="YYYY-MM-DD"/>
      </div>
      <div>
        <button class="w-100 btn btn-lg btn-secondary" onClick="Strike()" type="submit"  >Submit</button>
        <p class="mt-5 mb-3 text-muted">&copy; Bank LV 2022</p>
      </div>  
      </form>
     </div>
  );
}

export default Form;