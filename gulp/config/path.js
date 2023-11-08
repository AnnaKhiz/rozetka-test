import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; 
const srcFolder = `./src`;

export const path = {
	build: {
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
    
	},
	src: {
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		scss: `${srcFolder}/sass/style.sass`,
		html: `${srcFolder}/*.html`, //.pug
    
	},
	watch: {
		scss: `${srcFolder}/sass/**/*.sass`,
		html: `${srcFolder}/**/*.html`, //.pug
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}