const UltimateHTMLToPDFConverter = require('../src/converter');
const fs = require('fs-extra');
const path = require('path');

class ConverterTester {
    constructor() {
        this.converter = null;
        this.testResults = [];
    }

    async initialize() {
        console.log('🧪 Initializing Ultimate HTML to PDF Converter Tests...');
        this.converter = new UltimateHTMLToPDFConverter();
        await this.converter.initialize();
    }

    async runTests() {
        console.log('\n🚀 Starting comprehensive tests...\n');

        try {
            await this.testBasicHTML();
            await this.testComplexCSS();
            await this.testTables();
            await this.testImages();
            await this.testPageBreaks();
            await this.testCustomFonts();
            await this.testBackgrounds();
            await this.testResponsiveLayout();
            await this.testPerformance();
            await this.testErrorHandling();

            this.printResults();
        } catch (error) {
            console.error('❌ Test suite failed:', error);
        } finally {
            await this.cleanup();
        }
    }

    async testBasicHTML() {
        console.log('📝 Testing basic HTML conversion...');
        
        const html = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        h1 { color: #333; }
                        p { line-height: 1.6; }
                    </style>
                </head>
                <body>
                    <h1>Basic HTML Test</h1>
                    <p>This is a basic HTML document with simple styling.</p>
                    <p>It should convert to PDF without any issues.</p>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/basic-test.pdf')
        );

        this.assertTest('Basic HTML', result.success, 'Basic HTML conversion failed');
    }

    async testComplexCSS() {
        console.log('🎨 Testing complex CSS rendering...');
        
        const html = `
            <html>
                <head>
                    <style>
                        body { 
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            margin: 0;
                            padding: 20px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                        }
                        .container {
                            background: rgba(255, 255, 255, 0.1);
                            backdrop-filter: blur(10px);
                            border-radius: 15px;
                            padding: 30px;
                            margin: 20px 0;
                            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                        }
                        .gradient-text {
                            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            font-size: 2em;
                            font-weight: bold;
                        }
                        .flexbox {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 20px;
                        }
                        .card {
                            flex: 1;
                            background: rgba(255, 255, 255, 0.2);
                            padding: 20px;
                            border-radius: 10px;
                            text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1 class="gradient-text">Complex CSS Test</h1>
                        <p>Testing advanced CSS features including gradients, flexbox, and modern styling.</p>
                        
                        <div class="flexbox">
                            <div class="card">
                                <h3>Card 1</h3>
                                <p>Flexbox layout</p>
                            </div>
                            <div class="card">
                                <h3>Card 2</h3>
                                <p>Gradient backgrounds</p>
                            </div>
                            <div class="card">
                                <h3>Card 3</h3>
                                <p>Modern styling</p>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/complex-css-test.pdf')
        );

        this.assertTest('Complex CSS', result.success, 'Complex CSS conversion failed');
    }

    async testTables() {
        console.log('📊 Testing table rendering...');
        
        const html = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        table { 
                            width: 100%; 
                            border-collapse: collapse; 
                            margin: 20px 0;
                            page-break-inside: avoid;
                        }
                        th, td { 
                            border: 2px solid #ddd; 
                            padding: 15px; 
                            text-align: left; 
                        }
                        th { 
                            background: linear-gradient(45deg, #667eea, #764ba2);
                            color: white;
                            font-weight: bold;
                        }
                        tr:nth-child(even) { background-color: #f2f2f2; }
                        tr:hover { background-color: #ddd; }
                    </style>
                </head>
                <body>
                    <h1>Table Rendering Test</h1>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Laptop</td>
                                <td>Electronics</td>
                                <td>$999</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Smartphone</td>
                                <td>Electronics</td>
                                <td>$699</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>Headphones</td>
                                <td>Audio</td>
                                <td>$199</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Tablet</td>
                                <td>Electronics</td>
                                <td>$399</td>
                                <td>30</td>
                            </tr>
                        </tbody>
                    </table>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/table-test.pdf')
        );

        this.assertTest('Table Rendering', result.success, 'Table conversion failed');
    }

    async testImages() {
        console.log('🖼️ Testing image handling...');
        
        const html = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        .image-container {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 20px;
                            margin: 20px 0;
                        }
                        .image-card {
                            flex: 1;
                            min-width: 200px;
                            border: 2px solid #ddd;
                            border-radius: 10px;
                            padding: 15px;
                            text-align: center;
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                            border-radius: 5px;
                        }
                    </style>
                </head>
                <body>
                    <h1>Image Handling Test</h1>
                    <p>Testing image rendering and layout with various image types.</p>
                    
                    <div class="image-container">
                        <div class="image-card">
                            <h3>Sample Image 1</h3>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAxPC90ZXh0Pgo8L3N2Zz4K" alt="Sample 1" />
                        </div>
                        <div class="image-card">
                            <h3>Sample Image 2</h3>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzY0YmEyIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAyPC90ZXh0Pgo8L3N2Zz4K" alt="Sample 2" />
                        </div>
                    </div>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/image-test.pdf')
        );

        this.assertTest('Image Handling', result.success, 'Image conversion failed');
    }

    async testPageBreaks() {
        console.log('📄 Testing page break handling...');
        
        const html = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        .page { 
                            min-height: 800px; 
                            border: 2px solid #ddd; 
                            margin: 20px 0; 
                            padding: 20px;
                            page-break-after: always;
                        }
                        .page:last-child { page-break-after: auto; }
                        h1 { color: #333; margin-bottom: 20px; }
                        p { line-height: 1.6; margin-bottom: 15px; }
                    </style>
                </head>
                <body>
                    <div class="page">
                        <h1>Page 1</h1>
                        <p>This is the first page of our test document.</p>
                        <p>It should break properly to the next page.</p>
                        ${Array(20).fill('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>').join('')}
                    </div>
                    
                    <div class="page">
                        <h1>Page 2</h1>
                        <p>This is the second page.</p>
                        <p>Content should flow naturally across pages.</p>
                        ${Array(15).fill('<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>').join('')}
                    </div>
                    
                    <div class="page">
                        <h1>Page 3</h1>
                        <p>Final page of the test document.</p>
                        <p>All content should be properly formatted.</p>
                        ${Array(10).fill('<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>').join('')}
                    </div>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/page-break-test.pdf')
        );

        this.assertTest('Page Breaks', result.success, 'Page break handling failed');
    }

    async testCustomFonts() {
        console.log('🔤 Testing custom font handling...');
        
        const html = `
            <html>
                <head>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap');
                        
                        body { 
                            font-family: 'Open Sans', sans-serif; 
                            margin: 20px; 
                            line-height: 1.6;
                        }
                        .font-test {
                            margin: 20px 0;
                            padding: 15px;
                            border-left: 4px solid #667eea;
                        }
                        .roboto { font-family: 'Roboto', sans-serif; }
                        .light { font-weight: 300; }
                        .regular { font-weight: 400; }
                        .bold { font-weight: 700; }
                        .large { font-size: 1.5em; }
                    </style>
                </head>
                <body>
                    <h1>Custom Font Test</h1>
                    
                    <div class="font-test">
                        <h2 class="roboto light">Roboto Light (300)</h2>
                        <p class="roboto light">This text uses Roboto font with light weight.</p>
                    </div>
                    
                    <div class="font-test">
                        <h2 class="roboto regular">Roboto Regular (400)</h2>
                        <p class="roboto regular">This text uses Roboto font with regular weight.</p>
                    </div>
                    
                    <div class="font-test">
                        <h2 class="roboto bold large">Roboto Bold (700)</h2>
                        <p class="roboto bold">This text uses Roboto font with bold weight and larger size.</p>
                    </div>
                    
                    <div class="font-test">
                        <h2 class="light">Open Sans Light</h2>
                        <p class="light">This text uses Open Sans font with light weight.</p>
                    </div>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/font-test.pdf')
        );

        this.assertTest('Custom Fonts', result.success, 'Custom font conversion failed');
    }

    async testBackgrounds() {
        console.log('🎨 Testing background rendering...');
        
        const html = `
            <html>
                <head>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            margin: 0; 
                            padding: 20px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            min-height: 100vh;
                        }
                        .bg-test {
                            background: rgba(255, 255, 255, 0.9);
                            margin: 20px 0;
                            padding: 30px;
                            border-radius: 15px;
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                        }
                        .pattern-bg {
                            background-image: 
                                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%);
                            background-color: #667eea;
                            color: white;
                            padding: 30px;
                            border-radius: 10px;
                            margin: 20px 0;
                        }
                        .solid-bg {
                            background-color: #ff6b6b;
                            color: white;
                            padding: 20px;
                            border-radius: 8px;
                            margin: 15px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="bg-test">
                        <h1>Background Rendering Test</h1>
                        <p>Testing various background styles and effects.</p>
                    </div>
                    
                    <div class="pattern-bg">
                        <h2>Pattern Background</h2>
                        <p>This section has a complex background pattern with gradients.</p>
                    </div>
                    
                    <div class="solid-bg">
                        <h2>Solid Background</h2>
                        <p>This section has a solid background color.</p>
                    </div>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/background-test.pdf')
        );

        this.assertTest('Background Rendering', result.success, 'Background conversion failed');
    }

    async testResponsiveLayout() {
        console.log('📱 Testing responsive layout...');
        
        const html = `
            <html>
                <head>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            margin: 0; 
                            padding: 20px;
                        }
                        .responsive-grid {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                            gap: 20px;
                            margin: 20px 0;
                        }
                        .grid-item {
                            background: linear-gradient(45deg, #667eea, #764ba2);
                            color: white;
                            padding: 20px;
                            border-radius: 10px;
                            text-align: center;
                        }
                        .flex-container {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 15px;
                            margin: 20px 0;
                        }
                        .flex-item {
                            flex: 1;
                            min-width: 200px;
                            background: #f8f9fa;
                            padding: 15px;
                            border-radius: 8px;
                            border: 1px solid #ddd;
                        }
                    </style>
                </head>
                <body>
                    <h1>Responsive Layout Test</h1>
                    
                    <div class="responsive-grid">
                        <div class="grid-item">
                            <h3>Grid Item 1</h3>
                            <p>CSS Grid layout</p>
                        </div>
                        <div class="grid-item">
                            <h3>Grid Item 2</h3>
                            <p>Responsive design</p>
                        </div>
                        <div class="grid-item">
                            <h3>Grid Item 3</h3>
                            <p>Auto-fit columns</p>
                        </div>
                    </div>
                    
                    <div class="flex-container">
                        <div class="flex-item">
                            <h3>Flex Item 1</h3>
                            <p>Flexbox layout</p>
                        </div>
                        <div class="flex-item">
                            <h3>Flex Item 2</h3>
                            <p>Flexible sizing</p>
                        </div>
                        <div class="flex-item">
                            <h3>Flex Item 3</h3>
                            <p>Responsive behavior</p>
                        </div>
                    </div>
                </body>
            </html>
        `;

        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/responsive-test.pdf')
        );

        this.assertTest('Responsive Layout', result.success, 'Responsive layout conversion failed');
    }

    async testPerformance() {
        console.log('⚡ Testing performance with large content...');
        
        const largeContent = Array(100).fill(`
            <div style="margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
                <h3>Section ${Math.floor(Math.random() * 1000)}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul>
                    <li>Feature 1: High performance rendering</li>
                    <li>Feature 2: Memory efficient processing</li>
                    <li>Feature 3: Fast conversion times</li>
                </ul>
            </div>
        `).join('');

        const html = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        h1 { color: #333; text-align: center; }
                    </style>
                </head>
                <body>
                    <h1>Performance Test - Large Content</h1>
                    ${largeContent}
                </body>
            </html>
        `;

        const startTime = Date.now();
        const result = await this.converter.convertHTMLToPDF(
            html, 
            path.join(__dirname, '../test-outputs/performance-test.pdf')
        );
        const endTime = Date.now();

        const performance = endTime - startTime;
        this.assertTest('Performance', result.success && performance < 30000, `Performance test failed (${performance}ms)`);
    }

    async testErrorHandling() {
        console.log('⚠️ Testing error handling...');
        
        try {
            // Test with invalid HTML
            const invalidHTML = '<html><body><div>Unclosed div';
            const result = await this.converter.convertHTMLToPDF(
                invalidHTML, 
                path.join(__dirname, '../test-outputs/error-test.pdf')
            );
            
            this.assertTest('Error Handling', result.success, 'Error handling test failed');
        } catch (error) {
            this.assertTest('Error Handling', true, 'Error properly caught');
        }
    }

    assertTest(testName, condition, failureMessage) {
        const result = {
            name: testName,
            passed: condition,
            message: condition ? '✅ Passed' : `❌ Failed: ${failureMessage}`
        };
        
        this.testResults.push(result);
        console.log(`${result.message} - ${testName}`);
    }

    printResults() {
        console.log('\n📊 Test Results Summary:');
        console.log('=' .repeat(50));
        
        const passed = this.testResults.filter(r => r.passed).length;
        const total = this.testResults.length;
        
        this.testResults.forEach(result => {
            console.log(`${result.message}`);
        });
        
        console.log('\n' + '=' .repeat(50));
        console.log(`🎯 Overall: ${passed}/${total} tests passed`);
        
        if (passed === total) {
            console.log('🎉 All tests passed! The converter is working perfectly.');
        } else {
            console.log('⚠️ Some tests failed. Please check the implementation.');
        }
    }

    async cleanup() {
        if (this.converter) {
            await this.converter.close();
        }
        
        // Clean up test outputs
        try {
            await fs.remove(path.join(__dirname, '../test-outputs'));
        } catch (error) {
            // Ignore cleanup errors
        }
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    const tester = new ConverterTester();
    tester.runTests().catch(console.error);
}

module.exports = ConverterTester;
