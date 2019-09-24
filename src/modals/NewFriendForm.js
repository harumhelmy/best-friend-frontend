import React, {Fragment} from 'react'
import { Button, Form } from 'semantic-ui-react'

const NewFriendForm = () => {
  return (
  <Form onSubmit={()=>console.log('hi')}>
    <h3>add a new friend</h3>
      <Form.Field>
        <label>name</label>
        <input className="input" type="text" placeholder="name"/>
      </Form.Field>
      <Form.Field>
        <label>pronouns</label>
        <input className="input" type="text" placeholder="pronouns"/>
      </Form.Field>
      <Form.Field>
        <label>appreciation</label>
        <textarea className="textarea" type="text" placeholder="what do you appreciate about this friend?"/>
      </Form.Field>
      <Button type='submit' className='ui button'>Submit</Button>
  </Form>
  )
}

const mapDispatchToProps = () => {
  return {
    
  }
}

export default NewFriendForm 