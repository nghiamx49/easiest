package com.example.projectbankend.Repository;

import com.example.projectbankend.Models.Order;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Transactional
public interface OrderRepository extends PagingAndSortingRepository<Order, Integer> {
//    @Query(value = "SELECT new com.example.projectbankend.DTO.CartItemDTO(order.id, product.name, provider.store_name, order.quantity_purchased, product.unit_price) FROM " +
//            "Order order JOIN User user ON order.user.id = user.id " +
//            "JOIN Product product ON order.product.id = product.id " +
//            "JOIN Provider provider ON product.provider.id = provider.id " +
//            "WHERE order.user.id = ?1 AND order.orderStatus.type = 'InCart'")
    List<Order> findAllByUserIdAndOrderStatusType(int user_id, String orderStatus_type);

    Order findByIdAndUserIdAndOrderStatusType(int id, int user_id, String orderStatus_type);

    Order findById(int id);

    @Query(value = "SELECT * FROM orders WHERE product_id = ?1 AND user_id = ?2 AND status_id = 1", nativeQuery = true)
    Order findByProductIdAndUserId(int productId, int userId);

    @Query(value = "INSERT INTO orders(product_id,user_id,quantity_purchased, status_id)" +
            "VALUES (?1, ?2, ?3, 1)", nativeQuery = true)
    @Modifying
    void addToCart(int product_id, int user_id, int quantity_purchased);

    @Query(value = "UPDATE orders SET quantity_purchased = quantity_purchased + 1 WHERE id = ?1", nativeQuery = true)
    @Modifying
    void increaseItemQuantity(int id);

    @Query(value = "UPDATE orders SET quantity_purchased = quantity_purchased + ?2 WHERE id = ?1", nativeQuery = true)
    @Modifying
    void updateQuantity(int id, int quantity);

    @Query(value = "UPDATE orders SET quantity_purchased = quantity_purchased - 1 WHERE id = ?1", nativeQuery = true)
    @Modifying
    void decreaseItemQuantity(int id);
    @Query(value = "DELETE FROM orders WHERE id = ?1", nativeQuery = true)
    @Modifying
    void deleteItem(int id);


    @Query(value = "UPDATE orders SET payment_id = ?2, status_id = 2, date_of_payment = ?3, total = ?4 WHERE id = ?1", nativeQuery = true)
    @Modifying
    void doPayment(int id, int payment_types, Date date, String total);
}
