# 🍔 Frontend Food Ordering Website

---

## What It Is

This is a simple website that allows users to view food items, place them in a cart, and order. It's implemented **solely with HTML, CSS, and JavaScript**, with an emphasis on how to make this interactive shopping experience directly in a web browser, without the aid of any frameworks or build tools.

---

## What It Can Do

* **Show Food List:**
* Shows a list of different food products.
* Each product displays its **name and price**.

* **Add to Cart:**
    * Users are able to choose a product and specify the number they need.
    * The chosen products are placed in a **shopping cart**.
* You may place the same product several times to add to its quantity in the cart.

* **Manage Cart:**
    * See all products in the cart currently.
    * **Remove products** from the cart if you decide otherwise.

* **Place Order:**
    * Once products are put into the cart, you may click "Order."
* When ordering, a **success message** appears. **(Important: This is only a message on the site; no order is actually placed or processed.)**

---

## Tools Used

* **HTML:** For creating the web page structure.
* **CSS:** For making the site attractive and it show up properly.
* **JavaScript:** For making the site interactive, managing add/remove items from the cart, and processing the ordering process.

---

## Project Status

It is a **completely frontend project**. It doesn't have a backend (server or database).
* No real orders are dealt with or saved.
* No payment gateway.
* No user accounts or authentication.

---

## How to Put It Online (Deploy)

This project is easily deployable online with **GitHub Pages** since it is comprised solely of static HTML, CSS, and JavaScript files.

1.  **Put your primary `index.html` file in the root directory of your project folder.**
2.  **Push your project files to your GitHub repository's `main` branch:**
    ```bash
    git add .
    git commit -m "Initial commit of Food Ordering project"
```
git push origin main
    ```
    *(If you wish to deploy from a `gh-pages` branch, you would push to `gh-pages` instead of `main` after committing.)*

3.  **Set up GitHub Pages:**
    * Navigate to your repository on GitHub using your web browser.
    * Click the **Settings** tab.
* In the left sidebar, click on **Pages**.
    * Under "Build and deployment," choose **Branch** for the "Source."
    * Select `main` (or `gh-pages` if you pushed to that branch) as the branch to deploy from.
    * Ensure the folder is set to `/ (root)`.
    * Click **Save**.
* Your site should then be accessible at a URL such as `https://Yuvarajauvs.github.io/YourFoodOrderingRepoName/` (substitute `YourFoodOrderingRepoName` with the actual name of *this* particular GitHub repository).

---
