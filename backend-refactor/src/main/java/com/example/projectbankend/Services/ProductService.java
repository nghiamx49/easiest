package com.example.projectbankend.Services;

import com.example.projectbankend.DTO.ProductDTO;
import com.example.projectbankend.DTO.ProductDetailDTO;
import com.example.projectbankend.DTO.RateDTO;
import com.example.projectbankend.ExceptionHandler.NotFoundException;
import com.example.projectbankend.Mapper.ProductMapper;
import com.example.projectbankend.Mapper.RateMapper;
import com.example.projectbankend.Models.Product;
import com.example.projectbankend.Models.Rate;
import com.example.projectbankend.Repository.ProductRepository;
import com.example.projectbankend.Repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private RatingRepository ratingRepository;

    public int totalProductPages() {
        int count = productRepository.countAllByStatus("Allowed");
        if(count <= 10) {
            return 1;
        }
        else if (count % 10 != 0) {
            return (int) Math.floor(count / 10) + 1;
        }
        else  {
            return (int) Math.floor(count / 10);
        }
    }

    public List<ProductDTO> getAllAvailableProducts(Integer page, String keyword) {
        Pageable paging = PageRequest.of(page, 10);
        List<ProductDTO> productDTOS = new ArrayList<>();
        Page<Product> products = productRepository.findAllByStatus("Allowed","%" + keyword + "%", paging);
        for(Product product: products) {
            productDTOS.add(ProductMapper.toProductDTO(product));
        }
        return productDTOS;
    }

    public ProductDetailDTO getProductDetail(int id) {
        Product product = productRepository.findById(id);

        if(product == null) throw new NotFoundException("Không tìm thấy sản phẩm");
        List<Rate> rates= ratingRepository.findAllByProductId(id);
        List<RateDTO> rateDTOS = new ArrayList<>();
        for(Rate rate: rates) {
            rateDTOS.add(RateMapper.ratingDTO(rate));
        }
        return ProductMapper.toProductDetailDTO(product, rateDTOS);
    }

}
