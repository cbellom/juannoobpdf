import { Component, OnInit } from '@angular/core';
import { Data }    from './model/data';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

    model = new Data(1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1');

    submitted = false;

    onSubmit() {
      this.submitted = true;
      this.createPdf(this.model);
    }

    newData() {
      this.model = new Data(42, '', '', '', '', '', '', '', '', '', '');
    }

    createPdf(data : Data){
      let docDefinition = {
        styles: {
          'header': {
            fontSize: 22,
            bold: true,
            alignment: 'center'
          },
          'sub-header': {
            fontSize: 14,
            alignment: 'center'
          }
        },
        content: [
          { text: 'SISTEMA GESTIÓN DE CALIDAD', style: 'header' },
          { text: 'UNIVERSIDAD NACIONAL', style: 'sub-header' },
          { text: 'SEDE BOGOTA', style: 'sub-header', margin: [ 0, 0, 0, 20 ] },
          {
            layout: 'lightHorizontalLines', // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: [ '*', 'auto', 100, '*' ],

              body: [
                [ 'First', 'Second', 'Third', 'The last one' ],
                [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
              ]
            }
          },
          'Bulleted list example:',
          {
            // to treat a paragraph as a bulleted list, set an array of items under the ul key
            ul: [
              'Item 1',
              'Item 2',
              'Item 3',
              { text: 'Item 4', bold: true },
            ]
          },

          'Numbered list example:',
          {
            // for numbered lists set the ol key
            ol: [
              'Item 1',
              'Item 2',
              'Item 3'
            ]
          }
        ]
      };
      let pdf = pdfMake.createPdf(docDefinition);
      pdf.download('optionalName.pdf');
    }

    createContentToData(data: Data) {
      return [
        'paragraph 1',
        'paragraph 2',
        {
          columns: [
            'first column is a simple text',
            [
              // second column consists of paragraphs
              'paragraph A',
              'paragraph B',
              'these paragraphs will be rendered one below another inside the column'
            ]
          ]
        }
      ]
    }
  }
