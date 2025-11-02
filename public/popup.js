(function () {
  const saveTabButton = document.querySelector('[data-tab="save"]');
  const applyTabButton = document.querySelector('[data-tab="apply"]');
  const savePanel = document.getElementById('panel-save');
  const applyPanel = document.getElementById('panel-apply');

  function setActive(tab) {
    const isSave = tab === 'save';
    saveTabButton.setAttribute('aria-selected', String(isSave));
    applyTabButton.setAttribute('aria-selected', String(!isSave));
    savePanel.dataset.active = String(isSave);
    applyPanel.dataset.active = String(!isSave);
  }

  // Initialize default state
  setActive('save');

  // Tab interactions
  saveTabButton.addEventListener('click', () => setActive('save'));
  applyTabButton.addEventListener('click', () => setActive('apply'));

  // Save button
  const saveBtn = document.getElementById('save-style-btn');
  saveBtn.addEventListener('click', () => {
    console.log('Save button clicked');
    // Future: capture computed styles and persist to storage
  });
})();
