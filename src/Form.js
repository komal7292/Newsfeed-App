import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Form = () => {
  const [formSubmit, setFormSubmit] = useState({
    username: "",
    topic: "",
    typepost: ""
  })

  const handleInput = (event) => {
      const [name, value] = event.target
      setFormSubmit({...formSubmit, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmit(handleSubmit)
  }

  return (
    <div className="ui container segment">
        <div className="ui attached message">
          <div className="header">
            Create Your Post
          </div>
        </div>
        <form className="ui form attached fluid segment" onSubmit={handleSubmit}>
            <div className="field">
              <label>UserName</label>
              <input type="text"
                value={formSubmit.username}
                onChange={handleInput}
                name="username"
              />
            </div>
          {/* </div> */}
          <div className="field">
            <label>Topic</label>
            <input type ="text"
              value={formSubmit.topic}
              onChange={handleInput}
              name="topic" 
            />
          </div>
          <div className="field">
            <label>Your Post</label>
            <input type ="text"
              value={formSubmit.typepost}
              onChange={handleInput}
              name="typepost" 
            />
          </div>
          <div className="inline field">
            <div className="ui checkbox">
              <input type="checkbox" id="terms" />
              {/* <label for="terms">I agree to the terms and conditions</label> */}
            </div>
          </div>
          <div className="ui blue submit button">Submit</div>
          <Link to="/" className="ui negative button">Home</Link>
        </form>
    </div>
  )
}
export default Form;