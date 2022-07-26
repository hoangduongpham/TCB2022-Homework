const { SinhVien, DataLoader } = require("./Classes");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Nhập danh sách sinh viên từ file JSON
const listSV = [];
const dataLoader = new DataLoader();
dataLoader.load("./data.json");
const data = dataLoader.data;
data.forEach((json) => {
    let sv = new SinhVien(json);
    listSV.push(sv);
});

// 1. Điểm trung bình các môn học của từng sinh viên
function option1() {
    for (sv of listSV) {
        console.log(sv.ten + ": " + sv.diem.TB());
    }
}

// 2. Sinh viên có điểm trung bình cao, thấp nhất mỗi lớp
function option2() {
    // Lấy ra danh sách các lớp
    let listLop = [];
    listSV.forEach((sv) => {
        if (!listLop.includes(sv.lop)) {
            listLop.push(sv.lop);
        }
    });
    // Tìm điểm cao nhất và thấp nhất của từng lớp
    listLop.forEach((lop) => {
        let maxDiem = 0;
        let minDiem = 10;
        listSV.forEach((sv) => {
            if (sv.lop === lop) {
                if (sv.diem.TB() > maxDiem) {
                    maxDiem = sv.diem.TB();
                }
                if (sv.diem.TB() < minDiem) {
                    minDiem = sv.diem.TB();
                }
            }
        });
        console.log(lop + ": " + maxDiem + " - " + minDiem);
    });
}

// 3. Sinh viên qua môn với điểm các môn ≥ 4.0 (thang điểm 10)
function option3() {
    listSV.forEach((sv) => {
        if (sv.diem.isQuaMon()) {
            console.log(sv.ten);
        }
    });
}

// 4. Điểm chữ của từng sinh viên
function option4() {
    listSV.forEach((sv) => {
        console.log(
            sv.ten +
                ": \n" +
                "- Toán: " +
                sv.calcDiemChu(sv.diem.toan) +
                "\n" +
                "- Lý: " +
                sv.calcDiemChu(sv.diem.ly) +
                "\n" +
                "- Hóa: " +
                sv.calcDiemChu(sv.diem.hoa) +
                "\n" +
                "- Anh: " +
                sv.calcDiemChu(sv.diem.anh)
        );
    });
}

function main() {
    // Danh sách các tùy chọn
    console.log("Lựa chọn danh sách cần xem:");
    console.log("1. Điểm trung bình các môn học của từng sinh viên");
    console.log("2. Sinh viên có điểm trung bình cao, thấp nhất mỗi lớp");
    console.log("3. Sinh viên qua môn với điểm các môn ≥ 4.0 (thang điểm 10)");
    console.log("4. Điểm chữ của từng sinh viên");

    readline.question("Nhập số của lựa chọn: ", (option) => {
        switch (option) {
            case "1":
                option1();
                mainLoop();
                break;
            case "2":
                option2();
                mainLoop();
                break;
            case "3":
                option3();
                mainLoop();
                break;
            case "4":
                option4();
                mainLoop();
                break;
            default:
                console.log("Vui lòng nhập số trong khoảng 1-4");
                main();
        }
    });
}

// Chạy lại chương trình nếu cần
function mainLoop() {
    readline.question(
        "Bạn có muốn xem danh sách khác chứ? (y/n) ",
        (option) => {
            switch (option.toLowerCase()) {
                case "y":
                    main();
                    break;
                case "n":
                    console.log("Cảm ơn bạn đã sử dụng chương trình!");
                    break;
                default:
                    console.log("Vui lòng nhập y hoặc n");
            }
        }
    );
}

main();
