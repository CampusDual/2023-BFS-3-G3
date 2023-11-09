package com.campusdual.backend.model.core.service;

import java.util.*;
import com.campusdual.backend.model.core.dao.GymDao;
import com.campusdual.backend.model.core.dao.ReviewDao;
import com.campusdual.backend.model.core.dao.UserRoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import com.campusdual.backend.api.core.service.IUserService;
import com.campusdual.backend.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private UserRoleDao userRoleDao;

	@Autowired
	private GymDao gymDao;

	@Autowired
	private ReviewDao reviewDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;


	public void loginQuery(Map<?, ?> key, List<?> attr) {
		System.out.println();
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult userQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	public EntityResult userInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(userDao, attrMap);
	}

	public EntityResult userUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(userDao, attrMap, keyMap);
	}

	public EntityResult userDelete(Map<?, ?> keyMap) {
		List<String> attr = new ArrayList<>();
		attr.add("id_user_role");
		EntityResult queryResult = this.daoHelper.query(this.userRoleDao, keyMap, attr);

		List<String> attrReview = new ArrayList<>();
		attrReview.add("reviewid");
		EntityResult queryResultReview = this.daoHelper.query(this.reviewDao, keyMap, attrReview);

		if(!queryResult.isWrong() && !queryResult.isEmpty()) {
			for (int i = 0; i < queryResult.calculateRecordNumber(); i++) {
				Object id_user_role = queryResult.getRecordValues(i).get("id_user_role");
				Map<String, Object> kVRole = new HashMap<>();
				kVRole.put("id_user_role", id_user_role);
				this.daoHelper.delete(this.userRoleDao, kVRole);
			}
		}
		if (!queryResultReview.isWrong() && !queryResultReview.isEmpty()) {
			for (int i = 0; i < queryResultReview.calculateRecordNumber(); i++) {
				Object reviewid = queryResultReview.getRecordValues(i).get("reviewid");
				Map<String, Object> kVReview = new HashMap<>();
				kVReview.put("reviewid", reviewid);
				this.daoHelper.delete(this.reviewDao, kVReview);
			}
		}

		return this.daoHelper.delete(this.userDao, keyMap);
	}

	@Override
	public EntityResult deletableUserQuery(Map<String, Object> keyMap, List<String> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList, "deletable");
	}

}
