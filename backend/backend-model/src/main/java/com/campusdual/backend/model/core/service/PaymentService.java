package com.campusdual.backend.model.core.service;
import com.campusdual.backend.api.core.service.IPaymentService;
import com.campusdual.backend.model.core.dao.PaymentDao;
import com.campusdual.backend.model.core.dao.UserDao;
import com.campusdual.backend.model.core.dao.UserRoleDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;

@Lazy
    @Service("PaymentService")
    public class PaymentService implements IPaymentService {

        @Autowired
        private PaymentDao paymentDao;

        @Autowired
        private UserDao userDao;

        @Autowired
        private DefaultOntimizeDaoHelper daoHelper;
        @Override
        public EntityResult paymentQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
            return this.daoHelper.query(paymentDao, keyMap, attrList);
        }

        @Override
        @Transactional(rollbackFor = Exception.class)
        public EntityResult paymentInsert(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();

            //Borro el método de pago del usuario
            Map<String,Object>deleteMap = new HashMap<>();
            deleteMap.put(UserDao.ID,auth.getName());
            EntityResult deleteResult = this.daoHelper.delete(this.paymentDao, deleteMap);
            if(deleteResult.isWrong()) {
                return deleteResult;
            }
            //Inserto el método de pago del usuario
            keyMap.put(UserDao.ID,auth.getName());
            EntityResult insertResult = this.daoHelper.insert(this.paymentDao, keyMap);
            if(insertResult.isWrong()) {
                return insertResult;
            }
            //Actualizo la fecha de caducidad del usuario y el estado de activo
            Map<String,Object>updateMap = new HashMap<>();
            Map<String,Object>attrMap = new HashMap<>();
            updateMap.put(UserDao.ID,auth.getName());

            attrMap.put(UserDao.RENOVATIONDATE, addMonth(new Date(), 1));
            attrMap.put(UserDao.ACTIVE, true);

            EntityResult updateResult = this.daoHelper.update(this.userDao,attrMap,updateMap);
            if(updateResult.isWrong()) {
                return updateResult;
            }
            return insertResult;
        }

        @Override
        @Transactional(rollbackFor = Exception.class)
        public EntityResult paymentUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            keyValues.put(UserDao.ID,auth.getName());

            return this.daoHelper.update(this.paymentDao, attributes, keyValues);
        }

        @Override
        public EntityResult paymentDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            keyMap.put(UserDao.ID,auth.getName());

            Map<String,Object>updateMap = new HashMap<>();
            Map<String,Object>attrMap = new HashMap<>();
            attrMap.put(UserDao.ACTIVE, false);

            updateMap.put(UserDao.ID,auth.getName());
            EntityResult updateResult = this.daoHelper.update(this.userDao,attrMap,updateMap);
            if(updateResult.isWrong()) {
                return updateResult;
            }

            return this.daoHelper.delete(this.paymentDao, keyMap);
        }

        public Date addMonth(Date date, int amount){
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(date);
            calendar.add(Calendar.MONTH, amount);
            return calendar.getTime();
        }
    }


