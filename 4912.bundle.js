(self.webpackChunkhk_split_maker=self.webpackChunkhk_split_maker||[]).push([[4912],{64912:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: 'COMMENT'\n        // blockComment: ['COMMENT', '.'],\n    },\n    brackets: [['(', ')']],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: ':', close: '.' }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '`', close: '`' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: ':', close: '.' }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*(::\\\\s*|COMMENT\\\\s+)#region'),\n            end: new RegExp('^\\\\s*(::\\\\s*|COMMENT\\\\s+)#endregion')\n        }\n    }\n};\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    // defaultToken: 'invalid',\n    tokenPostfix: '.lexon',\n    ignoreCase: true,\n    keywords: [\n        'lexon',\n        'lex',\n        'clause',\n        'terms',\n        'contracts',\n        'may',\n        'pay',\n        'pays',\n        'appoints',\n        'into',\n        'to'\n    ],\n    typeKeywords: ['amount', 'person', 'key', 'time', 'date', 'asset', 'text'],\n    operators: [\n        'less',\n        'greater',\n        'equal',\n        'le',\n        'gt',\n        'or',\n        'and',\n        'add',\n        'added',\n        'subtract',\n        'subtracted',\n        'multiply',\n        'multiplied',\n        'times',\n        'divide',\n        'divided',\n        'is',\n        'be',\n        'certified'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // comment\n            [/^(\\s*)(comment:?(?:\\s.*|))$/, ['', 'comment']],\n            // special identifier cases\n            [\n                /\"/,\n                {\n                    token: 'identifier.quote',\n                    bracket: '@open',\n                    next: '@quoted_identifier'\n                }\n            ],\n            [\n                'LEX$',\n                {\n                    token: 'keyword',\n                    bracket: '@open',\n                    next: '@identifier_until_period'\n                }\n            ],\n            ['LEXON', { token: 'keyword', bracket: '@open', next: '@semver' }],\n            [\n                ':',\n                {\n                    token: 'delimiter',\n                    bracket: '@open',\n                    next: '@identifier_until_period'\n                }\n            ],\n            // identifiers and keywords\n            [\n                /[a-z_$][\\w$]*/,\n                {\n                    cases: {\n                        '@operators': 'operator',\n                        '@typeKeywords': 'keyword.type',\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, 'delimiter'],\n            // numbers\n            [/\\d*\\.\\d*\\.\\d*/, 'number.semver'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F]+/, 'number.hex'],\n            [/\\d+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter']\n        ],\n        quoted_identifier: [\n            [/[^\\\\\"]+/, 'identifier'],\n            [/\"/, { token: 'identifier.quote', bracket: '@close', next: '@pop' }]\n        ],\n        space_identifier_until_period: [\n            [':', 'delimiter'],\n            [' ', { token: 'white', next: '@identifier_rest' }]\n        ],\n        identifier_until_period: [\n            { include: '@whitespace' },\n            [':', { token: 'delimiter', next: '@identifier_rest' }],\n            [/[^\\\\.]+/, 'identifier'],\n            [/\\./, { token: 'delimiter', bracket: '@close', next: '@pop' }]\n        ],\n        identifier_rest: [\n            [/[^\\\\.]+/, 'identifier'],\n            [/\\./, { token: 'delimiter', bracket: '@close', next: '@pop' }]\n        ],\n        semver: [\n            { include: '@whitespace' },\n            [':', 'delimiter'],\n            [/\\d*\\.\\d*\\.\\d*/, { token: 'number.semver', bracket: '@close', next: '@pop' }]\n        ],\n        whitespace: [[/[ \\t\\r\\n]+/, 'white']]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oay1zcGxpdC1tYWtlci8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbGV4b24vbGV4b24uanM/ODFlZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVMsU0FBUyxZQUFZLEdBQUc7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQXNEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZEQUE2RDtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQTJDO0FBQzlEO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxtQkFBbUIsK0NBQStDO0FBQ2xFO0FBQ0Esb0JBQW9CLHNEQUFzRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQXNEO0FBQzFFO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBLCtCQUErQiwwREFBMEQ7QUFDekY7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNjQ5MTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBsaW5lQ29tbWVudDogJ0NPTU1FTlQnXG4gICAgICAgIC8vIGJsb2NrQ29tbWVudDogWydDT01NRU5UJywgJy4nXSxcbiAgICB9LFxuICAgIGJyYWNrZXRzOiBbWycoJywgJyknXV0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogJzonLCBjbG9zZTogJy4nIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcbiAgICAgICAgeyBvcGVuOiAnYCcsIGNsb3NlOiAnYCcgfSxcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICAgICAgeyBvcGVuOiAnOicsIGNsb3NlOiAnLicgfVxuICAgIF0sXG4gICAgZm9sZGluZzoge1xuICAgICAgICBtYXJrZXJzOiB7XG4gICAgICAgICAgICBzdGFydDogbmV3IFJlZ0V4cCgnXlxcXFxzKig6OlxcXFxzKnxDT01NRU5UXFxcXHMrKSNyZWdpb24nKSxcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKig6OlxcXFxzKnxDT01NRU5UXFxcXHMrKSNlbmRyZWdpb24nKVxuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgLy8gU2V0IGRlZmF1bHRUb2tlbiB0byBpbnZhbGlkIHRvIHNlZSB3aGF0IHlvdSBkbyBub3QgdG9rZW5pemUgeWV0XG4gICAgLy8gZGVmYXVsdFRva2VuOiAnaW52YWxpZCcsXG4gICAgdG9rZW5Qb3N0Zml4OiAnLmxleG9uJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIGtleXdvcmRzOiBbXG4gICAgICAgICdsZXhvbicsXG4gICAgICAgICdsZXgnLFxuICAgICAgICAnY2xhdXNlJyxcbiAgICAgICAgJ3Rlcm1zJyxcbiAgICAgICAgJ2NvbnRyYWN0cycsXG4gICAgICAgICdtYXknLFxuICAgICAgICAncGF5JyxcbiAgICAgICAgJ3BheXMnLFxuICAgICAgICAnYXBwb2ludHMnLFxuICAgICAgICAnaW50bycsXG4gICAgICAgICd0bydcbiAgICBdLFxuICAgIHR5cGVLZXl3b3JkczogWydhbW91bnQnLCAncGVyc29uJywgJ2tleScsICd0aW1lJywgJ2RhdGUnLCAnYXNzZXQnLCAndGV4dCddLFxuICAgIG9wZXJhdG9yczogW1xuICAgICAgICAnbGVzcycsXG4gICAgICAgICdncmVhdGVyJyxcbiAgICAgICAgJ2VxdWFsJyxcbiAgICAgICAgJ2xlJyxcbiAgICAgICAgJ2d0JyxcbiAgICAgICAgJ29yJyxcbiAgICAgICAgJ2FuZCcsXG4gICAgICAgICdhZGQnLFxuICAgICAgICAnYWRkZWQnLFxuICAgICAgICAnc3VidHJhY3QnLFxuICAgICAgICAnc3VidHJhY3RlZCcsXG4gICAgICAgICdtdWx0aXBseScsXG4gICAgICAgICdtdWx0aXBsaWVkJyxcbiAgICAgICAgJ3RpbWVzJyxcbiAgICAgICAgJ2RpdmlkZScsXG4gICAgICAgICdkaXZpZGVkJyxcbiAgICAgICAgJ2lzJyxcbiAgICAgICAgJ2JlJyxcbiAgICAgICAgJ2NlcnRpZmllZCdcbiAgICBdLFxuICAgIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgLy8gY29tbWVudFxuICAgICAgICAgICAgWy9eKFxccyopKGNvbW1lbnQ6Pyg/Olxccy4qfCkpJC8sIFsnJywgJ2NvbW1lbnQnXV0sXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGlkZW50aWZpZXIgY2FzZXNcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvXCIvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdpZGVudGlmaWVyLnF1b3RlJyxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldDogJ0BvcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BxdW90ZWRfaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdMRVgkJyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXQ6ICdAb3BlbicsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAaWRlbnRpZmllcl91bnRpbF9wZXJpb2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsnTEVYT04nLCB7IHRva2VuOiAna2V5d29yZCcsIGJyYWNrZXQ6ICdAb3BlbicsIG5leHQ6ICdAc2VtdmVyJyB9XSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnOicsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJyYWNrZXQ6ICdAb3BlbicsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAaWRlbnRpZmllcl91bnRpbF9wZXJpb2QnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bYS16XyRdW1xcdyRdKi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BvcGVyYXRvcnMnOiAnb3BlcmF0b3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0B0eXBlS2V5d29yZHMnOiAna2V5d29yZC50eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgICAgICAgWy9be30oKVxcW1xcXV0vLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCAnQGJyYWNrZXRzJ10sXG4gICAgICAgICAgICBbL0BzeW1ib2xzLywgJ2RlbGltaXRlciddLFxuICAgICAgICAgICAgLy8gbnVtYmVyc1xuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKlxcLlxcZCovLCAnbnVtYmVyLnNlbXZlciddLFxuICAgICAgICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXIuZmxvYXQnXSxcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCAnbnVtYmVyLmhleCddLFxuICAgICAgICAgICAgWy9cXGQrLywgJ251bWJlciddLFxuICAgICAgICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXVxuICAgICAgICBdLFxuICAgICAgICBxdW90ZWRfaWRlbnRpZmllcjogW1xuICAgICAgICAgICAgWy9bXlxcXFxcIl0rLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnaWRlbnRpZmllci5xdW90ZScsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc3BhY2VfaWRlbnRpZmllcl91bnRpbF9wZXJpb2Q6IFtcbiAgICAgICAgICAgIFsnOicsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsnICcsIHsgdG9rZW46ICd3aGl0ZScsIG5leHQ6ICdAaWRlbnRpZmllcl9yZXN0JyB9XVxuICAgICAgICBdLFxuICAgICAgICBpZGVudGlmaWVyX3VudGlsX3BlcmlvZDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICBbJzonLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgbmV4dDogJ0BpZGVudGlmaWVyX3Jlc3QnIH1dLFxuICAgICAgICAgICAgWy9bXlxcXFwuXSsvLCAnaWRlbnRpZmllciddLFxuICAgICAgICAgICAgWy9cXC4vLCB7IHRva2VuOiAnZGVsaW1pdGVyJywgYnJhY2tldDogJ0BjbG9zZScsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICBpZGVudGlmaWVyX3Jlc3Q6IFtcbiAgICAgICAgICAgIFsvW15cXFxcLl0rLywgJ2lkZW50aWZpZXInXSxcbiAgICAgICAgICAgIFsvXFwuLywgeyB0b2tlbjogJ2RlbGltaXRlcicsIGJyYWNrZXQ6ICdAY2xvc2UnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2VtdmVyOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIFsnOicsICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvXFxkKlxcLlxcZCpcXC5cXGQqLywgeyB0b2tlbjogJ251bWJlci5zZW12ZXInLCBicmFja2V0OiAnQGNsb3NlJywgbmV4dDogJ0Bwb3AnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXV1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64912\n")}}]);