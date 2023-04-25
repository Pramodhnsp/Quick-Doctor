package com.health.healer.project.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.health.healer.project.entity.User;
import com.health.healer.project.exception.DataAlraedyExist;
import com.health.healer.project.exception.DataNotFoundException;
import com.health.healer.project.exception.EmailAlreadyExists;
import com.health.healer.project.exception.PasswordInvalid;
import com.health.healer.project.exception.PhoneNumberAlreadyExists;
import com.health.healer.project.exception.UserNameAlreayExists;
import com.health.healer.project.exception.emailNotFound;
import com.health.healer.project.repo.UserRepo;
import com.health.healer.project.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo repo;
	BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

	@Override
	public Object SaveData(User u) {
		User u1 = repo.findByEmail(u.getU_email_id());
		User u2 = repo.findByphNo(u.getU_ph_no());
		User u5 = repo.findByUserName(u.getU_user_name());
		String pass = bcrypt.encode(u.getU_password());
		u.setU_password(pass);

		if (u5 instanceof User) {
			try {
				throw new UserNameAlreayExists();
			} catch (Exception q) {
				return q.getMessage();
			}
		}
		if (u1 instanceof User || u2 instanceof User) {
			if (u1 != null) {
				try {
					throw new EmailAlreadyExists();
				} catch (EmailAlreadyExists n) {
					return n.getMessage();
				}
			} else {
				try {
					throw new PhoneNumberAlreadyExists();
				} catch (PhoneNumberAlreadyExists p) {
					return p.getMessage();
				}
			}
		} else {
			return repo.save(u);
		}
	}

	@Override
	public Object login(String email_id, String password) {
		User u3 = repo.findByEmail(email_id);

		if (u3 instanceof User) {

			if (u3.getU_email_id().equalsIgnoreCase(email_id)) {
				if (bcrypt.matches(password, u3.getU_password())) {
					return u3;
				} else {
					try {
						throw new PasswordInvalid();
					} catch (PasswordInvalid p) {

						return p.getMessage();
					}
				}

			} else {
				try {
					throw new DataAlraedyExist();
				} catch (DataAlraedyExist e) {

					return e.getMessage();
				}
			}
		} else {
			try {
				throw new emailNotFound();
			} catch (emailNotFound e) {

				return e.getMessage();

			}
		}

	}

	@Override
	public Object forgotPassword(String email_id, String password) {
		User u4 = repo.findByEmail(email_id);

		if (u4 instanceof User && u4.getU_email_id().equalsIgnoreCase(email_id)) {

			String pass1 = bcrypt.encode(password);
			u4.setU_password(pass1);

			return repo.save(u4);

		} else {
			try {
				throw new emailNotFound();
			} catch (emailNotFound e) {
				return e.getMessage();
			}
		}
	}

	@Override
	public Object findByUserName(String userName) {
		User u6 = repo.findByUserName(userName);
		if (u6 instanceof User) {
			return u6;
		} else {
			try {
				throw new DataNotFoundException();
			} catch (DataNotFoundException d) {
				return d.getMessage();
			}
		}

	}

	@Override
	public Object findByEmail(String emailId) {
		User u7 = repo.findByEmail(emailId);
		if (u7 instanceof User) {
			return u7;
		} else {
			try {
				throw new emailNotFound();
			} catch (emailNotFound t) {
				return t.getMessage();
			}
		}
	}
}