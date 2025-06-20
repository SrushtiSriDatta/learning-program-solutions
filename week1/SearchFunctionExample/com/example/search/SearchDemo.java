package com.example.search;
import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search (array must be sorted)
    public static Product binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0) return products[mid];
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Watch", "Accessories"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Backpack", "Bags")
        };

        // Linear Search
        System.out.println("Linear Search: Searching for 'Watch'");
        Product result1 = linearSearch(products, "Watch");
        System.out.println(result1 != null ? "Found: " + result1 : "Not found");

        // Sort before binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        // Binary Search
        System.out.println("\nBinary Search: Searching for 'Watch'");
        Product result2 = binarySearch(products, "Watch");
        System.out.println(result2 != null ? "Found: " + result2 : "Not found");
    }
}

