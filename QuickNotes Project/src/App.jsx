import { useEffect, useMemo, useState } from 'react'
import './App.css'

const categories = [
  { value: 'Personal', color: '#fef3c7' },
  { value: 'Work', color: '#dbeafe' },
  { value: 'Ideas', color: '#dcfce7' },
  { value: 'Reminders', color: '#fce7f3' },
]

const emptyForm = {
  title: '',
  body: '',
  category: 'Personal',
}

function formatPrettyDate(date) {
  const value = new Date(date)
  const month = value.toLocaleString('en-US', { month: 'short' })
  const day = value.getDate()
  const suffix = ['th', 'st', 'nd', 'rd'][day % 10 > 3 ? 0 : day % 10]
  const time = value.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  return `${month} ${day}${suffix} ${time}`
}

function NoteForm({ form, setForm, onSubmit, submitLabel, onCancel }) {
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const rows = Math.max(4, Math.min(10, (form.body.match(/\n/g) || []).length + 2))

  return (
    <form className="note-form" onSubmit={onSubmit}>
      <input
        name="title"
        placeholder="Title (optional)"
        value={form.title}
        onChange={handleChange}
      />
      <select name="category" value={form.category} onChange={handleChange}>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.value}
          </option>
        ))}
      </select>
      <textarea
        name="body"
        placeholder="Write your note here..."
        value={form.body}
        rows={rows}
        onChange={handleChange}
        style={{ resize: 'none' }}
      />
      <div className="form-actions">
        <button type="submit">{submitLabel}</button>
        {onCancel ? (
          <button type="button" className="ghost" onClick={onCancel}>
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  )
}

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('quicknotes-project')
    return saved ? JSON.parse(saved) : []
  })
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [activeNote, setActiveNote] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    localStorage.setItem('quicknotes-project', JSON.stringify(notes))
  }, [notes])

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.body.toLowerCase().includes(search.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || note.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [notes, search, selectedCategory])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.body.trim()) return

    const now = new Date().toISOString()

    if (editingId) {
      setNotes((current) =>
        current.map((note) =>
          note.id === editingId
            ? { ...note, title: form.title, body: form.body, category: form.category, updatedAt: now }
            : note,
        ),
      )
      setEditingId(null)
      setActiveNote(null)
    } else {
      setNotes((current) => [
        {
          id: crypto.randomUUID(),
          title: form.title,
          body: form.body,
          category: form.category,
          createdAt: now,
          updatedAt: now,
        },
        ...current,
      ])
    }

    setForm(emptyForm)
  }

  const startEdit = (note) => {
    setEditingId(note.id)
    setForm({ title: note.title, body: note.body, category: note.category })
    setActiveNote(note)
  }

  const handleDelete = (id) => {
    const ok = window.confirm('Are you sure you want to delete your note?')
    if (!ok) return

    setNotes((current) => current.filter((note) => note.id !== id))
    if (activeNote?.id === id) {
      setActiveNote(null)
    }
  }

  return (
    <div className="app-shell">
      <header className="hero-card">
        <div>
          <p className="eyebrow">QuickNotes</p>
          <h1>Write things down before they disappear.</h1>
          <p className="subtext">
            A simple little notes app with titles, dates, categories, search, and a
            quick modal for reading and editing.
          </p>
        </div>
        <NoteForm
          form={form}
          setForm={setForm}
          onSubmit={handleSubmit}
          submitLabel={editingId ? 'Save note' : 'Add note'}
          onCancel={editingId ? () => { setEditingId(null); setForm(emptyForm) } : null}
        />
      </header>

      <section className="toolbar">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search notes"
        />
        <div className="filters">
          <button
            type="button"
            className={selectedCategory === 'All' ? 'filter active' : 'filter'}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={selectedCategory === category.value ? 'filter active' : 'filter'}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.value}
            </button>
          ))}
        </div>
      </section>

      <section className="notes-grid">
        {filteredNotes.map((note) => (
          <article
            key={note.id}
            className="note-card"
            style={{ backgroundColor: categories.find((c) => c.value === note.category)?.color }}
            onClick={() => setActiveNote(note)}
          >
            <div className="note-top">
              <span className="chip">{note.category}</span>
              <button
                type="button"
                className="delete-btn"
                onClick={(event) => {
                  event.stopPropagation()
                  handleDelete(note.id)
                }}
              >
                Delete
              </button>
            </div>
            {note.title ? <h3>{note.title}</h3> : null}
            <p className="note-body">{note.body}</p>
            <div className="note-meta">
              <span>Created: {formatPrettyDate(note.createdAt)}</span>
              {note.updatedAt !== note.createdAt ? (
                <span>Updated: {formatPrettyDate(note.updatedAt)}</span>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      {activeNote ? (
        <div className="modal-backdrop" onClick={() => setActiveNote(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="modal-top">
              <div>
                <p className="eyebrow">{activeNote.category}</p>
                <h2>{activeNote.title || 'Untitled note'}</h2>
              </div>
              <button type="button" className="ghost" onClick={() => setActiveNote(null)}>
                Close
              </button>
            </div>
            <p className="modal-body">{activeNote.body}</p>
            <div className="note-meta">
              <span>Created: {formatPrettyDate(activeNote.createdAt)}</span>
              {activeNote.updatedAt !== activeNote.createdAt ? (
                <span>Updated: {formatPrettyDate(activeNote.updatedAt)}</span>
              ) : null}
            </div>
            <div className="modal-actions">
              <button type="button" onClick={() => startEdit(activeNote)}>
                Edit note
              </button>
              <button
                type="button"
                className="ghost"
                onClick={() => handleDelete(activeNote.id)}
              >
                Delete
              </button>
            </div>
            {editingId === activeNote.id ? (
              <div className="edit-box">
                <NoteForm
                  form={form}
                  setForm={setForm}
                  onSubmit={handleSubmit}
                  submitLabel="Update note"
                  onCancel={() => {
                    setEditingId(null)
                    setForm(emptyForm)
                  }}
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
