import './iselect.css';
export class CustomSelect {
    constructor(selectElement, placeholder = 'Select an option') {
      if (!(selectElement instanceof HTMLSelectElement)) {
        console.error('Provided element is not a valid <select> element.')
        return
      }
  
      this.selectElement = selectElement
      this.customSelectWrapper = null
      this.customButton = null
      this.customDropdown = null
      this.selectedLabel = null
      this.placeholder = placeholder
      this.selectedValue = null
      this.caretIcon = null

      // Check for an initial selection
      
      this.createCustomSelect()
      const selectedOption = this.selectElement.options[this.selectElement.selectedIndex];
      if (selectedOption) {        
        this.selectOption(selectedOption.value, selectedOption.text)
      }
    }
  
    createCustomSelect() {
      this.selectElement.style.display = 'none'
  
      this.customSelectWrapper = document.createElement('div')
      this.customSelectWrapper.className = 'custom-select-wrapper'
      this.selectElement.classList.forEach((cls) => {
        this.customSelectWrapper.classList.add(cls);
      });
  
      this.customButton = document.createElement('button')
      this.customButton.className = 'custom-select-button'
      this.customButton.setAttribute('type', 'button')
      this.customButton.addEventListener('click', () => this.toggleDropdown())
  
      this.selectedLabel = document.createElement('span')
      this.selectedLabel.textContent = this.placeholder
      this.customButton.appendChild(this.selectedLabel)
  
      this.caretIcon = document.createElement('span')
      this.caretIcon.className = 'custom-select-caret'
      this.caretIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="size-4 inline-flex ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M5 10l7 7 7-7"></path></svg>'
      this.customButton.appendChild(this.caretIcon)
  
      this.customSelectWrapper.appendChild(this.customButton)
  
      const label = this.selectElement.getAttribute('data-label')
      if (label) {
        const labelElement = document.createElement('span')
        labelElement.className = 'custom-select-label'
        labelElement.textContent = label
        this.customButton.appendChild(labelElement)
      }
  
      this.customDropdown = document.createElement('ul')
      this.customDropdown.className = 'custom-select-dropdown hidden'
  
      Array.from(this.selectElement.options).forEach((option) => {
        const listItem = document.createElement('li')
        listItem.className = 'custom-select-option'
        listItem.textContent = option.text
        listItem.dataset.value = option.value
        listItem.addEventListener('click', () => this.selectOption(option.value, option.text))
        this.customDropdown.appendChild(listItem)
      })
  
      this.customSelectWrapper.appendChild(this.customDropdown)
      this.selectElement.parentNode.replaceChild(this.customSelectWrapper, this.selectElement)
  
      document.addEventListener('click', (event) => {
        if (!this.customSelectWrapper.contains(event.target)) {
          this.customDropdown.classList.add('hidden')
          this.caretIcon.classList.remove('active')
        }
      })
    }
  
    toggleDropdown() {
      if (!this.customDropdown.classList.contains('hidden')) {
        this.customDropdown.classList.add('hidden')
        this.caretIcon.classList.remove('active')
      } else {
        this.customDropdown.classList.remove('hidden')
  
        const rect = this.customButton.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const spaceBelow = windowHeight - rect.bottom
        const dropdownHeight = this.customDropdown.offsetHeight
  
        this.customDropdown.classList.add('hidden')
        this.caretIcon.classList.add('active')
  
        if (spaceBelow < dropdownHeight) {
          this.customDropdown.style.top = `-${dropdownHeight + 4}px`
        } else {
          this.customDropdown.style.top = `${rect.height + 4}px`
        }
  
        this.customDropdown.classList.toggle('hidden')
      }
    }
  
    selectOption(value, label) {
      this.selectedLabel.textContent = label
      this.selectedValue = value
      this.selectElement.value = value
  
      this.customDropdown.querySelectorAll('li').forEach((item) => {
        if (item.dataset.value === value) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
  
      this.caretIcon.classList.remove('active')
      this.customDropdown.classList.add('hidden')
    }
  }
  
  // Initialize on DOM content loaded
  if (typeof window !== 'undefined') {
    window.CustomSelect = CustomSelect
    document.addEventListener('DOMContentLoaded', () => {
      const selectElements = document.querySelectorAll('.custom-select')
      if (selectElements.length === 0) return
      selectElements.forEach((selectElement) => {
        new CustomSelect(selectElement, 'Choose an option')
      })
    })
  }
  