import { useReducer } from 'react'

const initialState = {
  currentStep: 1,
  formData: {
    // Step 1
    name: '',
    email: '',
    age: '',
    // Step 2
    username: '',
    password: '',
    confirmPassword: '',
    // Step 3
    newsletter: false,
    notifications: true,
    theme: 'light',
  },
  errors: {},
  isSubmitting: false,
  isCompleted: false,
}

// Returns an errors object for the given step ({} means the step is valid).
function validateStep(step, data) {
  const errors = {}

  if (step === 1) {
    if (!data.name.trim()) errors.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email'
    if (!data.age || Number(data.age) < 18) errors.age = 'You must be 18 or older'
  }

  if (step === 2) {
    if (data.username.trim().length < 3) errors.username = 'Username must be at least 3 characters'
    if (data.password.length < 6) errors.password = 'Password must be at least 6 characters'
    if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        formData: { ...state.formData, [action.data.field]: action.data.value },
      }
    case 'SET_ERRORS':
      return { ...state, errors: action.data }
    case 'NEXT_STEP': {
      const errors = validateStep(state.currentStep, state.formData)
      if (Object.keys(errors).length > 0) return { ...state, errors }
      return { ...state, errors: {}, currentStep: Math.min(state.currentStep + 1, 3) }
    }
    case 'PREV_STEP':
      return { ...state, errors: {}, currentStep: Math.max(state.currentStep - 1, 1) }
    case 'SUBMIT_FORM': {
      const errors = validateStep(state.currentStep, state.formData)
      if (Object.keys(errors).length > 0) return { ...state, errors }
      return { ...state, errors: {}, isSubmitting: false, isCompleted: true }
    }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}

function RegistrationWizard() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { currentStep, formData, errors, isCompleted } = state

  const updateField = (field, value) =>
    dispatch({ type: 'UPDATE_FIELD', data: { field, value } })

  if (isCompleted) {
    return (
      <div>
        <h2>Registration complete 🎉</h2>
        <p>Welcome aboard, {formData.name}!</p>
        <button onClick={() => dispatch({ type: 'RESET_FORM' })}>Start over</button>
      </div>
    )
  }

  return (
    <div className="wizard">
      <h2>Register (Step {currentStep} of 3)</h2>

      {currentStep === 1 && (
        <div className="wizard-step">
          <label>
            Name
            <input
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
            />
          </label>
          {errors.name && <span className="error">{errors.name}</span>}

          <label>
            Email
            <input
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
            />
          </label>
          {errors.email && <span className="error">{errors.email}</span>}

          <label>
            Age
            <input
              type="number"
              value={formData.age}
              onChange={(e) => updateField('age', e.target.value)}
            />
          </label>
          {errors.age && <span className="error">{errors.age}</span>}
        </div>
      )}

      {currentStep === 2 && (
        <div className="wizard-step">
          <label>
            Username
            <input
              value={formData.username}
              onChange={(e) => updateField('username', e.target.value)}
            />
          </label>
          {errors.username && <span className="error">{errors.username}</span>}

          <label>
            Password
            <input
              type="password"
              value={formData.password}
              onChange={(e) => updateField('password', e.target.value)}
            />
          </label>
          {errors.password && <span className="error">{errors.password}</span>}

          <label>
            Confirm Password
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => updateField('confirmPassword', e.target.value)}
            />
          </label>
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
      )}

      {currentStep === 3 && (
        <div className="wizard-step">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={formData.newsletter}
              onChange={(e) => updateField('newsletter', e.target.checked)}
            />
            Subscribe to newsletter
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={formData.notifications}
              onChange={(e) => updateField('notifications', e.target.checked)}
            />
            Enable notifications
          </label>

          <label>
            Theme
            <select
              value={formData.theme}
              onChange={(e) => updateField('theme', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
      )}

      <div className="wizard-nav">
        {currentStep > 1 && (
          <button onClick={() => dispatch({ type: 'PREV_STEP' })}>Back</button>
        )}
        {currentStep < 3 ? (
          <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>Next</button>
        ) : (
          <button onClick={() => dispatch({ type: 'SUBMIT_FORM' })}>Submit</button>
        )}
      </div>
    </div>
  )
}

export default RegistrationWizard
