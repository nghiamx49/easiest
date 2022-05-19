package com.example.projectbankend.Controllers;

import com.example.projectbankend.DTO.ProductDTO;
import com.example.projectbankend.DTO.ProductDetailDTO;
import com.example.projectbankend.DTO.Response;
import com.example.projectbankend.ExceptionHandler.NotFoundException;
import com.example.projectbankend.Models.Product;
import com.example.projectbankend.Models.Validator.Status;
import com.example.projectbankend.RequestModel.CreateProduct;
import com.example.projectbankend.RequestModel.UpdateProduct;
import com.example.projectbankend.Services.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.List;

@RestController
@RequestMapping("/api/provider/")
@Validated
public class    ProviderController {

    @Autowired
    private ProviderService providerService;

    @GetMapping("all_products/{status}")
    public ResponseEntity<?> getAllProducts(@PathVariable @Status String status, @RequestParam(defaultValue = "0") @Min(0) Integer page) {

        List<ProductDTO> data = providerService.getAllOwnProductsByStatus(status, page);
        int totalPage = providerService.totalProductPagesByStatus(status);

        return ResponseEntity.ok(Response.response(data, totalPage));
    }


    @GetMapping("product_detail/{id}")
    public ResponseEntity<?> getOwnProductDetail(@PathVariable int id) throws NotFoundException {
        ProductDetailDTO data = providerService.getProductDetail(id);
        return ResponseEntity.ok(Response.response(data, 0));
    }

    @GetMapping("all_categories")
    public ResponseEntity<?> getAllCategories () {
        return ResponseEntity.ok(Response.response(providerService.getAllCategories(), 0));
    }

    @PostMapping("create_product")
    public ResponseEntity<?> createProduct(@Valid @RequestBody CreateProduct createProduct) throws Exception{
            providerService.createProduct(createProduct);
        return ResponseEntity.status(HttpStatus.CREATED).body(Response.responseWithoutData());
    }

    @PutMapping("update_product")
    public ResponseEntity<?> updateProduct(@Valid @RequestBody UpdateProduct updateProduct) throws Exception {
        providerService.updateProduct(updateProduct);
        return ResponseEntity.status(200).body(Response.responseWithoutData());
    }
}
