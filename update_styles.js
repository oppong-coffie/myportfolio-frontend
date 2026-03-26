const fs = require('fs');
const path = require('path');

const files = [
    "Contributed.js",
    "Fashion.js",
    "GuduGames.js",
    "PasswordGenerator.js",
    "RozeyMobile.js",
    "Stallion.js",
    "Students.js",
    "TeamAlfy.js",
    "TimeTracker.js",
    "Tuaneka.js",
    "WhatsAppBot.js",
    "Zeazn.js",
    "ZuluDesk.js",
    "aakt.js",
    "izone.js",
    "prume.js",
    "sms.js"
];

for (let file of files) {
    const filePath = path.join(__dirname, 'src/components/products', file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        continue;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. change mb-20 to mb-2 for Hero / Iframe Preview
    content = content.replace(
        /className="relative rounded-\[2rem\] overflow-hidden shadow-2xl border border-gray-100 mb-20/g,
        `className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 mb-2`
    );

    // 2. space-y-20 to space-y-0
    content = content.replace(
        /className="space-y-20"/g,
        `className="space-y-0"`
    );

    // 3. Move Call to Action
    // Pattern to find the Call to Action section
    let ctaRegex = /\{\/\* Call to Action \*\/\}\s*<motion\.div variants=\{itemVariants\} className="[^"]*flex flex-col sm:flex-row gap-5">([\s\S]*?)<\/motion\.div>/;
    let ctaMatch = content.match(ctaRegex);

    if (ctaMatch) {
        let ctaContent = ctaMatch[0];

        // Remove the original Call to Action wrapper from the end
        content = content.replace(ctaContent, '');

        // Replace the specific pt-10 class inside CTA wrapper
        ctaContent = ctaContent.replace(/className="pt-10 flex flex-col sm:flex-row gap-5"/, `className="flex flex-col sm:flex-row gap-5"`);
        // Change CTA button padding
        ctaContent = ctaContent.replace(/className="inline-flex items-center justify-center px-10 py-5/g, `className="inline-flex items-center justify-center px-4 py-2`);

        // Inject before <p> tag
        // Match the header info wrapper structure up to the <p> tag
        let headerEndMatch = content.match(/<\/div>\s*<\/div>\s*<p className="text-xl text-gray-500 leading-relaxed font-medium">/);
        if (headerEndMatch) {
            // modify the top class
            content = content.replace(
                /variants=\{itemVariants\} className="max-w-3xl">\s*<div className="flex items-center mb-6">/,
                `variants={itemVariants} className="">\n              <div className="flex justify-between items-center"> \n              <div className="flex justify-between items-center mb-0">`
            );

            // insert CTA inside the new wrap
            content = content.replace(
                /<\/div>\s*<\/div>\s*<p className="text-xl text-gray-500 leading-relaxed font-medium">/,
                `</div>\n</div>\n ${ctaContent}\n              </div>\n\n              <p className="text-xl text-gray-500 leading-relaxed font-medium mb-5">`
            );
        }
    }

    // 4. Update Features & Stack Grid
    content = content.replace(
        /<motion\.div variants=\{itemVariants\} className="space-y-8">[\s\n]*<h3 className="text-2xl font-black flex items-center gap-3 tracking-tight">[\s\n]*<div className="w-10 h-10 rounded-2xl bg-primary\/5 flex items-center justify-center">[\s\n]*<ShieldCheck className="text-primary" size=\{24\} \/>[\s\n]*<\/div>[\s\n]*Key Features[\s\n]*<\/h3>/,
        `<motion.div variants={itemVariants} className="">\n                <h3 className="text-2xl font-black flex items-center gap-1 tracking-tight">\n                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center">\n                    <ShieldCheck className="text-primary" size={24} />\n                  </div>\n                  Key Features\n                </h3>`
    );

    content = content.replace(
        /<motion\.div variants=\{itemVariants\} className="space-y-8">[\s\n]*<h3 className="text-2xl font-black flex items-center gap-3 tracking-tight">[\s\n]*<div className="w-10 h-10 rounded-2xl bg-primary\/5 flex items-center justify-center">[\s\n]*<Code className="text-primary" size=\{24\} \/>[\s\n]*<\/div>[\s\n]*Technical Stack[\s\n]*<\/h3>/,
        `<motion.div variants={itemVariants} className="space-y-1">\n                <h3 className="text-2xl font-black flex items-center gap-3 tracking-tight">\n                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center">\n                    <Code className="text-primary" size={24} />\n                  </div>\n                  Technical Stack\n                </h3>`
    );

    content = content.replace(
        /<ul className="space-y-5">/g,
        `<ul className="space-y-1">`
    );

    content = content.replace(
        /className="grid sm:grid-cols-2 gap-4">/g,
        `className="grid sm:grid-cols-2 gap-1">`
    );

    // Stack items
    content = content.replace(
        /<div key=\{i\} className="p-5 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary\/20 hover:bg-white transition-all group shadow-sm hover:shadow-md">[\s\n]*<div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-sm">([\s\S]*?)<\/div>[\s\n]*<div className="text-\[10px\] text-gray-400 uppercase font-black tracking-\[0\.15em\] mb-1">(.*?)<\/div>[\s\n]*<div className="font-bold text-gray-900">(.*?)<\/div>[\s\n]*<\/div>/g,
        `<div key={i} className="p-1 flex gap-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white transition-all group shadow-sm hover:shadow-md">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                        $1
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase font-black tracking-[0.15em]">$2</div>
                        <div className="font-bold text-gray-900">$3</div>

                      </div>
                    </div>`
    );

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
}
