import { Controller } from 'egg';
import * as path from 'path';
import * as fs from 'fs';

export default class VideoController extends Controller {
    /**
     * 视屏流推送
     */
    push() {
        const {ctx} = this;
        let filePath = path.resolve(__dirname, '../public', ctx.params.path)
        let fileSize = fs.statSync(filePath).size;
        let start: any = parseInt(ctx
            .get('range')
            .substr(
              ctx.get('range').indexOf('=') + 1,
              ctx.get('range').indexOf('-') - 1
            ));
        let end: any = parseInt(ctx
            .get('range')
            .substr(ctx.get('range').indexOf('-') + 1));
        start = parseInt(start);
        end = parseInt(end);

        if (isNaN(start)) {
            start = 0;
        }
        if (isNaN(end)) {
            end = fileSize - 1;
        }
        ctx.status = 206;
        let header = {
            'Accept-Ranges': 'bytes',
            'Content-Type': 'video/mp4',
            'Content-Length': end - start + 1,
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            "cache-control": 'public,max-age=31536000'
        };
        ctx.set(header as any);
        if (ctx.writable) {
            ctx.body = fs.createReadStream(filePath, {
                start: <number>start,
                end: end,
                autoClose: false
            })
        }
    }
}
