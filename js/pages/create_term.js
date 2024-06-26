export const createTermContent = `

<form id="save_term">
  <div class="field is-horizontal m-2">
    <div class="field-label">
      <label class="label">New Term</label>
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <input class="input" type="text" name="new_term" id="new_term" placeholder="New Term Name" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" name="term_equivalent" id="term_equivalent" placeholder="Equivalent terms, with wall character separated. Eg.: direita | derecha" />
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal m-2">
    <div class="field-label">
      <!-- some empty space -->
    </div>

    <div class="field-body">
      <div class="field">
        <div class="control">
          <button id="add_term_button" class="button is-primary">Register</button>
        </div>
      </div>
    </div>

  </div>
</form>
`
