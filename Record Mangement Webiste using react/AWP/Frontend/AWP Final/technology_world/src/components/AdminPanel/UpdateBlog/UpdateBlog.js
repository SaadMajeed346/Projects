import React from 'react';
import { Button, Form, Card } from 'react-bootstrap'

function UpdateBlog() {
  return (  
    <div class='container'>
          <form accept-charset="UTF-8" className='updater'>
          <div class="form-group">
            <label for="exampleInputName"><h5>Verifier</h5></label>
            <br></br>
            <br></br>
            <input type="text" name="fullname" class="form-control" id="exampleInputName" value='Saad'  required="required"/>
            <br></br>
            <br></br>
          </div>
          <div class="form-group">
            <label for="exampleInputName"><h5>Title </h5></label>
            <br></br>
            <br></br>
            <input type="text" name="fullname" class="form-control" id="exampleInputName" value='Solana'  required="required"/>
            <br></br>
            <br></br>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required"><h5>Author Name</h5></label>
            <br></br>
            <br></br>
            <input type="text" name="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value='Saad Majeed'/>
            <br></br>
            <br></br>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required" ><h5>Related to which field</h5></label>
            <br></br>
            <br></br>
            <input type="text" name="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value='BlockChain'/>
            <br></br>
            <br></br>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required"><h5>Description</h5></label>
            <br></br>
            <br></br>
            <textarea type="text" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value='Hello solana is the future of blockchain and you will see it
                soon'/>
            <br></br>
            <br></br>
          </div>
          <hr/>
          <br></br>
          <div class="form-group mt-3">
            <label class="mr-2"><h5>Upload Photo:</h5></label>
            <br></br>
            <input type="file" name="file"/>
            <br></br>
          </div>
          <br></br>
          <hr/>
          
          <button type="submit" class="btn btn-warning"><h5>Update Blog</h5></button>
          <br></br>
        </form>
      </div>
    );
}

export default UpdateBlog;
