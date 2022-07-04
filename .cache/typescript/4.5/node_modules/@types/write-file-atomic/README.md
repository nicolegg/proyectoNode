# Installation
> `npm install --save @types/write-file-atomic`

# Summary
This package contains type definitions for write-file-atomic (https://github.com/npm/write-file-atomic).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/write-file-atomic.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/write-file-atomic/index.d.ts)
````ts
// Type definitions for write-file-atomic 4.0
// Project: https://github.com/npm/write-file-atomic
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = writeFile;

declare function writeFile(
    filename: string,
    data: string | Buffer,
    options: writeFile.Options | BufferEncoding,
    callback: (error?: Error) => void,
): void;
declare function writeFile(filename: string, data: string | Buffer, callback: (error?: Error) => void): void;
declare function writeFile(
    filename: string,
    data: string | Buffer,
    options?: writeFile.Options | BufferEncoding,
): Promise<void>;

declare namespace writeFile {
    function sync(filename: string, data: string | Buffer, options?: Options | BufferEncoding): void;

    interface Options {
        chown?:
            | {
                  uid: number;
                  gid: number;
              }
            | undefined;
        /**
         * @default 'utf8'
         */
        encoding?: BufferEncoding | undefined;
        fsync?: boolean | undefined;
        mode?: number | undefined;
        tmpfileCreated?: ((tmpfile: string) => void) | undefined;
    }
}

````

### Additional Details
 * Last updated: Thu, 10 Feb 2022 19:01:43 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)
 * Global values: none

# Credits
These definitions were written by [BendingBender](https://github.com/BendingBender), and [Piotr Błażejewicz](https://github.com/peterblazejewicz).
