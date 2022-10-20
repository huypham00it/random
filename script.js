const popup = document.getElementById('popup');
const loader = document.getElementById('loader');
const award = document.getElementById('award');
const btn = document.getElementById('party');
const awardImage = document.getElementById('image');

const members = [
    { name: "Nguyễn Thị Trà My", img: "./img/My_Nguyễn.png" },
    { name: "Lê Thị Tố Quyên", img: "./img/Quyên.png" },
    { name: "Mai Thúy Vy", img: "./img/Mai_Vy.png" },
    { name: "Nguyễn Thị Thanh Huyền", img: "./img/Huyền.png" },
    { name: "Lê Thị Như Thảo", img: "./img/Thảo.png" },
    { name: "Lê Thị Trà My", img: "./img/My_Lê.png" },
    { name: "Lê Thị Hồng Cẩm", img: "./img/Cẩm.png" },
    { name: "Nguyễn Hồ Bích Luân", img: "./img/Luân.png" },
    { name: "Bùi Thị Thu Thủy", img: "./img/Thủy.png" },
    { name: "Vũ Thị Kim Lệ", img: "./img/Kim_Lệ.png" },
    { name: "Võ Hoàng Liên", img: "./img/Liên.png" },
    { name: "Nguyễn Thị Quỳnh Hương", img: "./img/Hương.png" },
    { name: "Trịnh Ngọc Anh Khôi", img: "./img/Khôi.png" },
    { name: "Nguyễn Thị Huyền Trang", img: "./img/Huyền_Trang.png" },
    { name: "Nguyễn Hồng Bích Trâm", img: "./img/Trâm.png" },
    { name: "Huỳnh Trần Gia Hân", img: "./img/Hân.png" },
    { name: "Huỳnh Gia Dinh", img: "./img/Dinh.png" },
    { name: "Lê Hoàng Nhật Linh", img: "./img/Linh.png" },
    { name: "Lê Thị Huyền Vy", img: "./img/Huyền_Vy.png" },
    { name: "Cao Mỹ Duyên", img: "./img/Duyên.png" },
    { name: "Nguyễn Thị Thiên Hoa", img: "./img/Hoa.png" }
]

let party = false;
let container = tsParticles.domItem(0);

popup.addEventListener('click', function () {
    popup.classList.add('hide');
    members.shift();
    party = false;

    container.pauseEmitter("party");
    awardImage.classList.add('hide');
})


btn.addEventListener('click', function () {
    award.textContent = ""
    popup.classList.remove('hide');
    loader.classList.add('loading');


    setTimeout(function () {
        loader.classList.remove('loading');
        const giftIndex = shuffle(members);
        container = tsParticles.domItem(0);

        if (!members.length > 0) {
            awardImage.classList.remove('hide');
            awardImage.style.width = '200px';
            awardImage.setAttribute('src', './empty.png');
            award.textContent = "Hết quà";
            return;
        }
        showName(giftIndex[0])
        if (!party) {
            party = true;

            container.playEmitter("party");
        }
    }, 500)


})

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function showName({ name, img }) {
    award.textContent = name;
    awardImage.setAttribute('src', img)
    awardImage.classList.remove('hide');
}


// function loadtsParticles() {
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    fullScreen: {
        enable: true
    },
    particles: {
        number: {
            value: 0,
            zIndex: 100
        },
        color: {
            value: ["#00FFFC", "#FC00FF", "#fffc00"]
        },
        shape: {
            type: "confetti",
            options: {
                confetti: {
                    type: ["circle", "square"]
                }
            }
        },
        opacity: {
            value: 1,
            animation: {
                enable: true,
                minimumValue: 0,
                speed: 2,
                startValue: "max",
                destroy: "min"
            }
        },
        size: {
            value: 10,
            random: {
                enable: true,
                minimumValue: 3
            }
        },
        links: {
            enable: false
        },
        life: {
            duration: {
                sync: true,
                value: 5
            },
            count: 1
        },
        move: {
            enable: true,
            gravity: {
                enable: true,
                acceleration: 20
            },
            speed: 30,
            decay: 0.1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "destroy",
                top: "none"
            }
        }
    },
    interactivity: {
        detectsOn: "window",
        events: {
            resize: true
        }
    },
    detectRetina: true,
    emitters: {
        autoPlay: false,
        name: "party",
        direction: "none",
        spawnColor: {
            value: "#ff0000",
            animation: {
                h: {
                    enable: true,
                    offset: {
                        min: -1.4,
                        max: 1.4
                    },
                    speed: 0.1,
                    sync: false
                },
                l: {
                    enable: true,
                    offset: {
                        min: 20,
                        max: 80
                    },
                    speed: 0,
                    sync: false
                }
            }
        },
        life: {
            count: 0,
            duration: 0.1,
            delay: 0.4
        },
        rate: {
            delay: 0.1,
            quantity: 100
        },
        size: {
            width: 0,
            height: 0
        }
    }
});
// }
