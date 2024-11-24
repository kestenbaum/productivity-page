export function Header() {
    const header = document.createElement('header');
    header.setAttribute('class', 'h-20 flex items-center justify-center');

    header.innerHTML = `
            <div class="container mx-auto">
                <div>
                    <a class="text-black" href="javascript:void(0)">Logo</a>
                </div>
            </div>
    `;

    return header;
}