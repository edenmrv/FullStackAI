import { useState } from 'react'
import { loadUsername, saveUsername } from '../lib/user'

const Profile = () => {
  const [name, setName] = useState(loadUsername())
  const [saved, setSaved] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    saveUsername(name.trim())
    setSaved(true)
  }

  return (
    <div className="page">
      <h1 className="profile-title">Profile</h1>
      <form className="profile-form" onSubmit={handleSave}>
        <label className="profile-label">User Name</label>
        <input
          className="profile-input"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setSaved(false)
          }}
        />
        <div className="profile-actions">
          {saved && <span className="saved-msg">Saved!</span>}
          <button className="tweet-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
