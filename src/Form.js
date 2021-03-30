import React from 'react';
import {Link} from 'react-router-dom'

const Form = () => {
  return (
    <div className="ui container segment">
        <div className="ui attached message">
          <div className="header">
            Create Your Post
          </div>
        </div>
        <form className="ui form attached fluid segment">
            <div className="field">
              <label>UserName</label>
              <input placeholder="User Name" type="text" />
            </div>
          {/* </div> */}
          <div className="field">
            <label>Topic</label>
            <input placeholder="Topic" type ="text" />
          </div>
          <div className="field">
            <label>Your Post</label>
            <input placeholder="Type Post" type ="text" />
          </div>
          <div className="inline field">
            <div className="ui checkbox">
              <input type="checkbox" id="terms" />
              <label for="terms">I agree to the terms and conditions</label>
            </div>
          </div>
          <div class="ui blue submit button">Submit</div>
          <Link to="/" class="ui negative button">Home</Link>
        </form>
    </div>
  )
}
export default Form;