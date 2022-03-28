const addTemplate = document.createElement("template");
const updateTemplate = document.createElement("template");
const deleteTemplate = document.createElement("template");

addTemplate.innerHTML = `
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addModalLabel">Add Faculty</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="container">
      <div class="row">
        <div class="col-6">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" placeholder="First Name" class="form-control" id="firstName" aria-describedby="emailHelp">
        </div>
        <div class="col-6">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" placeholder="Last Name" class="form-control" id="lastName" aria-describedby="emailHelp">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
        <label for="SID" class="form-label">SID</label>
        <input type="text" placeholder="SXXXXXX" class="form-control" id="SID" aria-describedby="emailHelp">
        </div>
        <div class="col-6">
        <label for="department" class="form-label">Last Name</label>
        <input type="text" placeholder="Department" class="form-control" id="department" aria-describedby="emailHelp">
        </div>
      </div>
      <div class="row">
      <div class="col-12">
      <label for="email" class="form-label">Email</label>
      <input type="email" placeholder="abc@nwmissouri.edu" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      </div>
      <div class="row">
      <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input type="text" placeholder="Address" class="form-control" id="address" aria-describedby="emailHelp">
      </div>
    </div>
    <div class="row">
    <div class="col-6">
    <label for="phoneNumber" class="form-label">Phone Number</label>
    <input type="text" placeholder="(660)-XXX-XXXX" class="form-control" id="phoneNumber" aria-describedby="emailHelp">
    </div>
    <div class="col-6">
    <label for="pay" class="form-label">Pay</label>
    <input type="number" placeholder="$" class="form-control" id="pay" aria-describedby="emailHelp">
    </div>
  </div>
      </div>
  
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add Faculty</button>
      </div>
    </div>
  </div>
</div>
`;

updateTemplate.innerHTML = `
<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addModalLabel">Update Faculty</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="container">
      <div class="row">
        <div class="col-6">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" value="Sruthi" placeholder="First Name" class="form-control" id="firstName" aria-describedby="emailHelp">
        </div>
        <div class="col-6">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" value="Kolluri" placeholder="Last Name" class="form-control" id="lastName" aria-describedby="emailHelp">
        </div>
      </div>
      <div class="row">
        <div class="col-6">
        <label for="SID" class="form-label">SID</label>
        <input type="text" value="S857465" placeholder="SXXXXXX" class="form-control" id="SID" aria-describedby="emailHelp">
        </div>
        <div class="col-6">
        <label for="department" class="form-label">Last Name</label>
        <input type="text" value="Info Systems" placeholder="Department" class="form-control" id="department" aria-describedby="emailHelp">
        </div>
      </div>
      <div class="row">
      <div class="col-12">
      <label for="email" class="form-label">Email</label>
      <input type="email" value="s857465@nwmissouri.edu" placeholder="abc@nwmissouri.edu" class="form-control" id="email" aria-describedby="emailHelp">
      </div>
      </div>
      <div class="row">
      <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input type="text" value="12 N UNIVERSITY DR, MARYVILLE, MO, 64468" placeholder="Address" class="form-control" id="address" aria-describedby="emailHelp">
      </div>
    </div>
    <div class="row">
    <div class="col-6">
    <label for="phoneNumber" class="form-label">Phone Number</label>
    <input type="text" value="6759359220" placeholder="(660)-XXX-XXXX" class="form-control" id="phoneNumber" aria-describedby="emailHelp">
    </div>
    <div class="col-6">
    <label for="pay" class="form-label">Pay</label>
    <input type="number" value="425" placeholder="$" class="form-control" id="pay" aria-describedby="emailHelp">
    </div>
  </div>
      </div>
  
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Update Faculty</button>
      </div>
    </div>
  </div>
</div>
`;

deleteTemplate.innerHTML = `
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="deleteModalLabel">Delete Faculty</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Confirm to Delete Faculty
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete Faculty</button>
    </div>
  </div>
</div>
</div>
`;

document.body.appendChild(addTemplate.content);
document.body.appendChild(updateTemplate.content);
document.body.appendChild(deleteTemplate.content);
