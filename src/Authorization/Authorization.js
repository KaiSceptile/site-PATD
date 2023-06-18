import './Authorization.css';

function Authorization(){
    return(<form className='authorization'>
        <div className='auth-title'>
        <button>Back..</button>
        <h3>Log In</h3>
        </div>
        
        <div className='field'>
        <p>
            Username:
        </p>
        <input type="text" name="username"/>
        </div>
        <div className='field'>
        <p>
            Password:
        </p>
        <input type="text" name="password"/>
        </div>
        <a>Forgot password?</a>
        <button type='submit'>Submit</button>
        <button className='sign-up'>Sign Up</button>
    </form>)
}

export default Authorization;