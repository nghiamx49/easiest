package com.example.projectbankend.Services;

import com.example.projectbankend.DTO.ProductDTO;
import com.example.projectbankend.DTO.ProviderDTO;
import com.example.projectbankend.DTO.UserDTO;
import com.example.projectbankend.ExceptionHandler.NotFoundException;
import com.example.projectbankend.Mapper.ProductMapper;
import com.example.projectbankend.Mapper.ProviderMapper;
import com.example.projectbankend.Mapper.UserMapper;
import com.example.projectbankend.Models.Product;
import com.example.projectbankend.Models.Provider;
import com.example.projectbankend.Models.User;
import com.example.projectbankend.Repository.ProductRepository;
import com.example.projectbankend.Repository.ProviderRepository;
import com.example.projectbankend.Repository.UserRepository;
import com.example.projectbankend.RequestModel.UpdateStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    private ProviderRepository providerRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    public int totalProvidersPage(String status) {
        int count = providerRepository.countProviderByStatus(status);
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

    public int totalUserPagesByStatus(boolean status) {
        int count = userRepository.countAllByBan(status);
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

    public int totalProductPagesByStatus(String status, String keyword) {
        int count = productRepository.countAllByStatus(status);
        if (!keyword.equals(" ")){
            return 1;
        }
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

    public List<ProviderDTO> findAllProviderByStatus(String status, Integer page) {
        Pageable paging = PageRequest.of(page, 10);
        Page<Provider> allProvider = providerRepository.findAllByStatus(status,paging);
        List<ProviderDTO> providers = new ArrayList<>();
        for(Provider provider: allProvider) {
            providers.add(ProviderMapper.toProviderDTO(provider));
        }
        return providers;
    }

    public void updateProviderStatus(UpdateStatus updateStatus) throws Exception{
        if(providerRepository.findById(updateStatus.getId()) == null)
        throw new NotFoundException("không tìm thấy tài khoản nhà cung cấp");
        try {
            providerRepository.updateRegisterStatus(updateStatus.getId(), updateStatus.getStatus());
        }
        catch (Exception e) {
            throw new Exception(e);
        }
    };

    public List<UserDTO> findAllUserByBanStatus(boolean banStatus, Integer page) {
        Pageable paging = PageRequest.of(page, 10);
        List<UserDTO> allUsers = new ArrayList<>();
        Page<User> users = userRepository.findAllByBan(banStatus, paging);
        for(User user: users) {
            allUsers.add(UserMapper.toUserDTO(user));
        }
        return allUsers;
    }

    public void banUser(int userId , String ban) throws Exception {
        if(userRepository.findById(userId) == null) throw new NotFoundException("không tìm thấy tài khoản người dùng");
        try {
            if(ban.equals("ban"))
                userRepository.banUser(userId , true);
            else
                userRepository.banUser(userId , false);
        }
        catch (Exception e) {
            throw new Exception(e);
        }
    }

    public List<ProductDTO> getAllProductsByStatus(String status, Integer page, String keyword) {
        Pageable paging = PageRequest.of(page, 10);
        Page<Product> products = productRepository.findAllByStatus(status,"%" + keyword + "%", paging);
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product: products) {
            productDTOS.add(ProductMapper.toProductDTO(product));
        }
        return productDTOS;
    }

    public void updateProductStatus(UpdateStatus updateStatus) throws Exception {

        try{
            productRepository.updateProductStatus(updateStatus.getId(), updateStatus.getStatus());
        }
        catch (Exception e) {
            throw new Exception(e);
        }
    }
}
