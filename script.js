let balance = 0;

document.getElementById("earnButton").addEventListener("click", function() {
    let amount = Math.floor(Math.random() * 10000) + 5000; // 5000 - 15000 so‘m oralig‘ida
    balance += amount;

    document.getElementById("balance").innerText = balance.toLocaleString() + " so‘m";

    let messages = [
        "🔥 Zo‘r! Pul ishlab oldingiz!",
        "🎉 Omadingiz keldi!",
        "💰 Qoyil! Yana ishlang!",
        "📈 Puliz ko‘payib boryapti!"
    ];

    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;

    // Agar balans 100,000 yoki undan ko‘p bo‘lsa, pulni yechish formasi chiqadi
    if (balance >= 100000) {
        document.getElementById("withdrawSection").style.display = "block";
    }
});

// Pulni yechib olish tugmasi bosilganda
document.getElementById("withdrawButton").addEventListener("click", function() {
    let cardNumber = document.getElementById("cardNumber").value;

    if (cardNumber.length < 16) {
        alert("❌ Iltimos, to‘liq plastik karta raqamini kiriting!");
        return;
    }

    alert("✅ Pul muvaffaqiyatli yechildi! Tez orada kartangizga tushadi.");
    balance = 0;
    document.getElementById("balance").innerText = balance.toLocaleString() + " so‘m";
    document.getElementById("withdrawSection").style.display = "none";
});