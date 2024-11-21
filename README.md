# ISelect JS

A lightweight, customizable select dropdown component built with vanilla JavaScript.

## Installation

```bash
npm install iselect
```

#### CDN Link
[https://cdn.jsdelivr.net/npm/iselect](https://cdn.jsdelivr.net/npm/iselect)

#### Usage in CommonJS

#### Add 'iselect' class in native select tag. 
```html
<!-- Create your select element -->
<select class="iselect">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<script src="node_modules/iselect/dist/iselect.js"></script>
```

#### Add a label 

```html
<select class="iselect" data-label="Select Option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

#### Usage in ESM 

```javascript
import { Iselect } from "iselect"

const selects = document.querySelectorAll("select")
selects.forEach((select) => {
    new Iselect(select)
})

```

### Features

- Fully customizable styling
- Dark mode support
- Keyboard navigation
- Automatic positioning (top/bottom based on viewport)
- Custom labels
- No dependencies

### License

MIT