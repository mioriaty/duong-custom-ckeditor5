/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview.js';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin.js';

class CustomPlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add('templatePreview', locale => {
			const view = new ButtonView(locale);

			view.set({
				label: 'Template Preview',
				icon: '<i class="fa-solid fa-database"></i>',
				tooltip: true,
			});

			view.on('execute', () => {
				console.log('hello');
			});

			return view;
		});
	}
}

class Editor extends ClassicEditor { }

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Indent,
	Italic,
	Link,
	List,
	Paragraph,
	Table,
	Underline,
	CustomPlugin
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'|',
			'heading',
			'bold',
			'italic',
			'underline',
			'|',
			'fontBackgroundColor',
			'fontColor',
			'fontSize',
			'fontFamily',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'outdent',
			'indent',
			'|',
			'insertTable',
			'undo',
			'redo',
			'templatePreview'
		]
	},
	language: 'en'
};



export default Editor;
