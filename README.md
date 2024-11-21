# ISelect JS

A lightweight, customizable select dropdown component built with vanilla JavaScript.

## Installation

```bash
npm install iselect
```

## Use cdn link 
[<script src="https://cdn.jsdelivr.net/npm/iselect"></script>](<script src="https://cdn.jsdelivr.net/npm/iselect"></script>)

## Usage

### Add 'iselect' class in native select tag. 
```html
<!-- Create your select element -->
<select class="iselect">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<script src="node_modules/iselect/dist/iselect.js"></script>
```

## Add a label 

```html
<select class="iselect" data-label="Select Option">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```
Or add manually

```javascript


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