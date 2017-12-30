# Quickmark

**Chrome extension for quickly organizing bookmarks with keyboard shortcut**

* Add a bookmark to a folder assigned to a keyboard shortcut
* This extension replaces the original `Cmd/Ctrl` + `d`

## Tasks.
- [ ] Create a popup panel
- [ ] Bind keyboard shortcuts
- [ ] Add shortcut customization
- [ ] Minify for production.
- [ ] Create a screencast
- [ ] Publish to Chrome extension store.

## Development
For development, using this extension requires activating the developer mode.

* Clone this repository.
* Navigate to `chrome://extensions/`.
* Check the `Developer mode` checkbox.
* Click `Load unpacked extenssion...`.
* Navigate to the cloned copy of the repo.

## Build

* Run `npm run build`.
* The following files will be zipped:
  1. `background.js`
  2. `content.js`
  3. `manifest.json`
  4. `/icons`
* `quickmark.zip` is ready to be deployed to Chrome Web Store.
