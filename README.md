# Custom Select JS

A lightweight, customizable select dropdown component built with vanilla JavaScript.

## Installation

```bash
npm install iselect
```

## Usage

```html
<!-- Include the CSS -->
<link rel="stylesheet" href="node_modules/custom-select-js/dist/custom-select.css">

<!-- Create your select element -->
<select class="custom-select" data-label="Options">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<!-- Include the JS -->
<script src="node_modules/custom-select-js/dist/custom-select.js"></script>
```

Or import it in your JavaScript:

```javascript
import { CustomSelect } from 'custom-select-js';
import 'custom-select-js/dist/custom-select.css';

// Initialize manually
const select = document.querySelector('.custom-select');
new CustomSelect(select, 'Choose an option');
```

## Features

- Fully customizable styling
- Dark mode support
- Keyboard navigation
- Automatic positioning (top/bottom based on viewport)
- Custom labels
- No dependencies

## License

MIT