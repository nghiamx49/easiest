package com.example.projectbankend.ExceptionHandler;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtExceptionHandler implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
        final String expired = (String) httpServletRequest.getAttribute("expired");
        if (expired!=null){
            httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED,expired);
        }else{
            httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED,"Phiên đăng nhập hết hại, vui lòng đăng nhập lại");
        }
    }
}
