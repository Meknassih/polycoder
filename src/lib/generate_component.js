const { spawn } = require('child_process');

async function generate() {
    return new Promise((resolve, reject) => {
        const hygen = spawn('npx', ['hygen', 'component', 'new', process.argv[2]], { cwd: process.cwd(), shell: true });
        hygen.stdout.on('data', data => {
            console.log(data.toString());
        });
        hygen.stderr.on('data', data => {
            console.log(data.toString());
            reject(data.toString());
        });
        hygen.on('error', (error) => {
            console.log(error.message);
            reject(error.message);
        });
        hygen.on('close', code => {
            console.log(`hygen process exited with code ${code}`);

            const route = spawn('npm', ['run', 'add:route', process.argv[2]], { cwd: process.cwd(), shell: true });
            route.stdout.on('data', data => {
                console.log(data.toString());
            });
            route.stderr.on('data', data => {
                console.log(data.toString());
                reject(data.toString());
            });
            route.on('error', (error) => {
                console.log(error.message);
                reject(error.message);
            });
            route.on('close', code => {
                console.log(`route process exited with code ${code}`);

                const link = spawn('npm', ['run', 'add:link', process.argv[2]], { cwd: process.cwd(), shell: true });
                link.stdout.on('data', data => {
                    console.log(data.toString());
                });
                link.stderr.on('data', data => {
                    console.log(data.toString());
                    reject(data.toString());
                });
                link.on('error', (error) => {
                    console.log(error.message);
                    reject(error.message);
                });
                link.on('close', code => {
                    console.log(`link process exited with code ${code}`);
                    resolve(0);
                });
            });
        });
    });
}

generate().then(code => (code)).catch(() => (1));