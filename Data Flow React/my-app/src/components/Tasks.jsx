import React, { useState } from 'react'
import Task from './Task'

// Spot Check 1
export default function Tasks() {
  const [data, setData] = useState({
    tasks: [
      { text: 'Take out trash', complete: false },
      { text: 'Trash talk Carrie', complete: true },
      { text: 'Carry boxes upstairs', complete: false },
    ],
  })

  const completeTask = (index) => {
    const newTasks = data.tasks.map((task, i) => {
      if (i === index) {
        return { ...task, complete: true }
      }
      return task
    })
    setData({ ...data, tasks: newTasks })
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1 - Tasks</h4>
      <div className="exercise" id="tasks">
        {/* completed tasks are filtered out, so once you click Complete it disappears */}
        {data.tasks.map((task, index) =>
          task.complete ? null : (
            <Task key={index} text={task.text} onComplete={() => completeTask(index)} />
          )
        )}
      </div>
    </div>
  )
}
