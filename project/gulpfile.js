/*
    执行gulp配置文件需要在gulpfile.js文件目录下执行命令 $ gulp 任务名称 
*/

const gulp = require('gulp');
const cssmin = require('gulp-cssmin')
const autoPrefixer = require('gulp-autoprefixer')

// 1.创建一个打包CSS的任务，gulp3的写法 
// gulp.task('cssHandler', function() {
//     // 如果要捕获该任务的结束，需要把这个流 return 出去，task就会处理流
//     return gulp
//         // 找到源文件
//         .src('./src/css/*.css')
//         // 进行转码
//         .pipe(autoPrefixer())
//         // 压缩文件
//         .pipe(cssmin())
//         // 把文件放到指定目录下
//         .pipe(gulp.dest('./dist/css/'));
// })

// 1.创建一个打包CSS的任务，gulp4的写法
const cssHandler = function() {
    return gulp
        .src('./src/css/*.css')
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'));
}
// 导出这个任务，必须要导出，否则无法执行
module.exports.cssHandler = cssHandler

// 创建一个打包SASS的任务
const sassHandler = function() {
    return gulp
        .src('./src/sass/*.scss')
        .pipe()
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/sass/'));
}

module.exports.sassHandler = sassHandler