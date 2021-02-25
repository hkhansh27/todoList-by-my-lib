import html from "../my-lib/core.js";

function TodoItem({ todo, index, editIndex }) {
  return html`
    <li
      class="${todo.completed && "completed"}
      ${editIndex === index && "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('edit', ${index})">${todo.title}</label>
        <button
          class="destroy"
          onclick="dispatch('destroy', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('updateEditing', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
        onblur="dispatch('updateEditing', this.value.trim())"
      />
    </li>
  `;
}
export default TodoItem;
