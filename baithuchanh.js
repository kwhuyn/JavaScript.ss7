    let players = [];
    let goals = [];
    /**
     * @description hàm thêm  thông tin cầu thủ kèm theo bàn thắng
     * @param {*} name tên cầu thủ
     * @param {*} goal số bàn thắng của cầu thủ đó
     */

    function addPlayer(name, goal) {
        if (name && !isNaN(goal) && name.trim() !== "") {
            players.push(name);
            goals.push(Number(goal));
            console.log(`=> Đã thêm ${name} thành công.`);
        } else {
            console.log("Tên hoặc số bàn thắng không hợp lệ.");
        }
    }

    function showSquad() {
        console.log("--- DANH SÁCH ĐỘI HÌNH ---");
        if (players.length === 0) {
            console.log("Danh sách trống.");
            return;
        }
        for (let i = 0; i < players.length; i++) {
            console.log(`${i + 1}. ${players[i]} - ${goals[i]} bàn`);
        }
    }

    const getTotalGoals = function() {
        let total = 0;
        for (let goal of goals) {
            total += goal;
        }
        return total;
    };

    function findMostGoals(goalsArray) {
        if (goalsArray.length === 0) return 0;
        let maxGoal = goalsArray[0];
        for (let i = 1; i < goalsArray.length; i++) {
            if (goalsArray[i] > maxGoal) {
                maxGoal = goalsArray[i];
            }
        }
        return maxGoal;
    }

    function main() {
        let choice;
        do {
            choice = prompt(`MENU QUẢN LÝ ĐỘI BÓNG:
                                1. Nhập cầu thủ
                                2. Xem danh sách
                                3. Tổng bàn thắng
                                4. Xem Vua phá lưới
                                0. Thoát`);

            if (choice === null) break;

            switch (choice) {
                case "1":
                    let name = prompt("Nhập tên:");
                    let goalInput = prompt("Nhập số bàn thắng:");
                    addPlayer(name, goalInput);
                    break;
                case "2":
                    showSquad();
                    break;
                case "3":
                    console.log(`=> Tổng số bàn thắng của cả đội là: ${getTotalGoals()} bàn.`);
                    break;
                case "4":
                    if (players.length === 0) {
                        console.log("Chưa có dữ liệu cầu thủ.");
                    } else {
                        let max = findMostGoals(goals);
                        let index = goals.indexOf(max);
                        console.log(`=> Vua phá lưới hiện tại là ${players[index]} ghi được: ${max} bàn.`);
                    }
                    break;
                case "0":
                    console.log("Tạm biệt!");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ.");
            }
        } while (choice !== "0");
    }

    main();
