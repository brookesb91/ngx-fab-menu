<h1 align="center">ngx-fab-menu</h1>

<p align="center">A customisable floating action button & mega menu for Angular projects</p>

---

![Demo Example](/screenshots/demo.gif)
![Custom Demo Example](/screenshots/demo-1.gif)
![Custom Demo Example](/screenshots/demo-2.gif)

### Quick Start

```bash
$ npm i https://github.com/brookesb91/ngx-fab-menu/releases/download/v1.0.0/ngx-fab-menu-1.0.0.tgz
```

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import ngx-fab-menu
import { NgxFabMenuModule } from 'ngx-fab-menu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // Add to imports
    NgxFabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Example

```html
<ngx-fab-menu>
  <!-- FAB Menu Items -->
  <!-- Each menu item should have the `fab-menu-item` class -->
  <div class="fab-menu-item">
    <!--
      Any custom markup for each individual item is allowed, however,
      `.fab-menu-item-icon` and `.fab-menu-item-title` will be styled by default
    -->
    <span class="fab-menu-item-icon">
      <svg><path d="..."></path></svg>
    <span>

    <span class="fab-menu-item-title">
      Item 1
    </span>
  </div>

  <div class="fab-menu-item">
    <!-- etc. -->
  </div>

</ngx-fab-menu>
```

### Customisation

#### Properties

Default styling can be overridden with the following inputs.

| Input              | Type     | Description                                              | Default                             |
| ------------------ | -------- | -------------------------------------------------------- | ----------------------------------- |
| `backgroundColor`  | `string` | Main background color                                    | `#000000`                           |
| `color`            | `string` | Main text color                                          | `#ffffff`                           |
| `backdropSize`     | `string` | Size of the menu backdrop on both axes                   | `100vh`                             |
| `backdropRadius`   | `string` | Backdrop top-left border-radius                          | `9999px`                            |
| `backdropOpacity`  | `string` | Backdrop opacity                                         | `0.9`                               |
| `triggerSize`      | `string` | Size of the FAB on both axes                             | `64px`                              |
| `triggerBoxShadow` | `string` | FAB box shadow                                           | `0 2px 4px 2px rgba(0, 0, 0, 0.25)` |
| `menuItemHeight`   | `string` | Menu item height (Only affects default markup structure) | `64px`                              |

#### Example

```html
<ngx-fab-menu
  backgroundColor="#10c15c"
  color="#ededed"
  backdropSize="75vh"
  backdropOpacity="0.75"
>
  <!-- etc. -->
</ngx-fab-menu>
```
