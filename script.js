document.addEventListener('DOMContentLoaded', () => {
    const projectsTab = document.getElementById('projects-tab');
    const certsTab = document.getElementById('certs-tab');
    const projectsContent = document.getElementById('projects-content');
    const certsContent = document.getElementById('certs-content');

    // Fungsi untuk menampilkan konten yang benar
    function showProjects() {
        projectsContent.classList.remove('hidden');
        certsContent.classList.add('hidden');
        // projectsTab.classList.add('bg-indigo-600');
        // projectsTab.classList.remove('bg-indigo-900');
        // certsTab.classList.remove('bg-indigo-600');
        // certsTab.classList.add('bg-indigo-900');
    }

    function showCertificates() {
        projectsContent.classList.add('hidden');
        certsContent.classList.remove('hidden');
        // certsTab.classList.add('bg-indigo-600');
        // certsTab.classList.remove('bg-indigo-900');
        // projectsTab.classList.remove('bg-indigo-600');
        // projectsTab.classList.add('bg-indigo-900');
    }

    // Tambahkan event listener untuk tombol
    projectsTab.addEventListener('click', showProjects);
    certsTab.addEventListener('click', showCertificates);

    class Typewriter {
        constructor(el, options) {
            this.el = el;
            this.words = [...this.el.dataset.typewriter.split(',')];
            this.speed = options?.speed || 300;
            this.delay = options?.delay || 300;
            this.repeat = options?.repeat;
            this.initTyping();
        }

        wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

        toggleTyping = () => this.el.classList.toggle('typing');

        async typewriter(word) {
            this.el.textContent = '';
            this.toggleTyping();
            await this.wait(this.delay);
            for (const letter of word.split('')) {
                this.el.textContent += letter;
                await this.wait(this.speed);
            }
            this.toggleTyping();
            await this.wait(this.delay);
            this.toggleTyping();
            while (this.el.textContent.length !== 0) {
                this.el.textContent = this.el.textContent.slice(0, -1);
                await this.wait(this.speed);
            }
            this.toggleTyping();
        }

            async initTyping() {
                while (true) {
                    for (const word of this.words) {
                        await this.typewriter(word);
                    }
                    if (!this.repeat) break;
                }
            }
    }

    const el1 = new Typewriter(document.querySelector('[data-typewriter]'), {
        speed: 80,
        repeat: true,
    });
})


